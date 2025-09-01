import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiRecipe } from "@/types/recipe";
import { getCurrentUser } from "@/lib/auth";

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

    const recipes = savedRecipes.map((recipe) => ({
      recipeName: recipe.recipeName,
      ingredientsYouHave: JSON.parse(recipe.ingredientsYouHave),
      missingIngredients: JSON.parse(recipe.missingIngredients),
      fullIngredientsList: JSON.parse(recipe.fullIngredientsList),
      instructions: JSON.parse(recipe.instructions),
      estimatedTime: {
        preparationTime: recipe.preparationTime,
        cookingTime: recipe.cookingTime,
      },
      savedRecipeId: recipe.id,
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

    const existingRecipe = await prisma.savedRecipe.findFirst({
      where: {
        recipeName: recipe.recipeName,
        userId: user.id,
      },
    });

    if (existingRecipe) {
      return NextResponse.json(
        { error: "Recipe already saved" },
        { status: 409 }
      );
    }

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

    return NextResponse.json({
      message: "Recipe saved successfully",
      id: savedRecipe.id,
    });
  } catch (error) {
    console.error("Error saving recipe:", error);
    return NextResponse.json(
      {
        error: "Failed to save recipe",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
