import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiRecipe } from "@/types/recipe";
import { getCurrentUser } from "@/lib/auth";

// GET - Retrieve all favorite recipes for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const favoriteRecipes = await prisma.favoriteRecipe.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    // Convert database format back to ApiRecipe format
    const recipes: ApiRecipe[] = favoriteRecipes.map((recipe) => ({
      recipeName: recipe.recipeName,
      ingredientsYouHave: JSON.parse(recipe.ingredientsYouHave),
      missingIngredients: JSON.parse(recipe.missingIngredients),
      fullIngredientsList: JSON.parse(recipe.fullIngredientsList),
      instructions: JSON.parse(recipe.instructions),
      estimatedTime: {
        preparationTime: recipe.preparationTime,
        cookingTime: recipe.cookingTime,
      },
    }));

    return NextResponse.json(recipes);
  } catch (error) {
    console.error("Error fetching favorite recipes:", error);
    return NextResponse.json(
      { error: "Failed to fetch favorite recipes" },
      { status: 500 }
    );
  }
}

// POST - Add a recipe to favorites
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const recipe: ApiRecipe = await request.json();
    console.log("Attempting to favorite recipe:", recipe.recipeName);

    // Check if recipe already exists in favorites for this user
    const existingFavorite = await prisma.favoriteRecipe.findFirst({
      where: {
        recipeName: recipe.recipeName,
        userId: user.id,
      },
    });

    if (existingFavorite) {
      console.log("Recipe already favorited:", recipe.recipeName);
      return NextResponse.json(
        { error: "Recipe already favorited" },
        { status: 409 }
      );
    }

    // Add the recipe to favorites
    const favoriteRecipe = await prisma.favoriteRecipe.create({
      data: {
        recipeName: recipe.recipeName,
        ingredientsYouHave: JSON.stringify(recipe.ingredientsYouHave),
        missingIngredients: JSON.stringify(recipe.missingIngredients),
        fullIngredientsList: JSON.stringify(recipe.fullIngredientsList),
        instructions: JSON.stringify(recipe.instructions),
        preparationTime: recipe.estimatedTime.preparationTime,
        cookingTime: recipe.estimatedTime.cookingTime,
        userId: user.id,
      },
    });

    console.log("Recipe favorited successfully:", favoriteRecipe.id);
    return NextResponse.json({
      message: "Recipe favorited successfully",
      id: favoriteRecipe.id,
    });
  } catch (error) {
    console.error("Error favoriting recipe:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      {
        error: "Failed to favorite recipe",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
