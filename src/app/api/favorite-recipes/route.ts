import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
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

    const favoriteRecipes = await prisma.favoriteRecipe.findMany({
      where: { userId: user.id },
      include: {
        savedRecipe: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const recipes = favoriteRecipes.map((favorite) => ({
      recipeName: favorite.savedRecipe.recipeName,
      savedRecipeId: favorite.savedRecipe.id,
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

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const { savedRecipeId } = await request.json();

    const existingFavorite = await prisma.favoriteRecipe.findFirst({
      where: {
        savedRecipeId: savedRecipeId,
        userId: user.id,
      },
    });

    if (existingFavorite) {
      return NextResponse.json(
        { error: "Recipe already favorited" },
        { status: 409 }
      );
    }

    const favoriteRecipe = await prisma.favoriteRecipe.create({
      data: {
        savedRecipeId: savedRecipeId,
        userId: user.id,
      },
    });

    return NextResponse.json({
      message: "Recipe favorited successfully",
      id: favoriteRecipe.id,
    });
  } catch (error) {
    console.error("Error favoriting recipe:", error);
    return NextResponse.json(
      { error: "Failed to favorite recipe" },
      { status: 500 }
    );
  }
}
