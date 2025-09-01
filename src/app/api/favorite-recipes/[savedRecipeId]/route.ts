import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ savedRecipeId: string }> }
) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const resolvedParams = await params;
    const savedRecipeId = resolvedParams.savedRecipeId;

    const deletedFavorite = await prisma.favoriteRecipe.deleteMany({
      where: {
        savedRecipeId: savedRecipeId,
        userId: user.id,
      },
    });

    if (deletedFavorite.count === 0) {
      return NextResponse.json(
        { error: "Favorite recipe not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Recipe removed from favorites successfully",
    });
  } catch (error) {
    console.error("Error removing favorite recipe:", error);
    return NextResponse.json(
      { error: "Failed to remove favorite recipe" },
      { status: 500 }
    );
  }
}
