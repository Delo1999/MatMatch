import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiRecipe } from "@/types/recipe";
import { getCurrentUser } from "@/lib/auth";

// GET - Retrieve all saved recipes for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const savedRecipes = await prisma.savedRecipe.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    // Convert database format back to ApiRecipe format
    const recipes: ApiRecipe[] = savedRecipes.map((recipe) => ({
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
    console.error("Error fetching saved recipes:", error);
    return NextResponse.json(
      { error: "Failed to fetch saved recipes" },
      { status: 500 }
    );
  }
}

// POST - Save a new recipe
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
    console.log("Attempting to save recipe:", recipe.recipeName);

    // Check if recipe already exists for this user
    const existingRecipe = await prisma.savedRecipe.findFirst({
      where: {
        recipeName: recipe.recipeName,
        userId: user.id,
      },
    });

    if (existingRecipe) {
      console.log("Recipe already exists:", recipe.recipeName);
      return NextResponse.json(
        { error: "Recipe already saved" },
        { status: 409 }
      );
    }

    // Save the recipe to database
    const savedRecipe = await prisma.savedRecipe.create({
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

    console.log("Recipe saved successfully:", savedRecipe.id);
    return NextResponse.json({
      message: "Recipe saved successfully",
      id: savedRecipe.id,
    });
  } catch (error) {
    console.error("Error saving recipe:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      {
        error: "Failed to save recipe",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
