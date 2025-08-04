import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE - Remove a favorite recipe by name
export async function DELETE(
  request: NextRequest,
  { params }: { params: { recipeName: string } }
) {
  try {
    const recipeName = decodeURIComponent(params.recipeName);

    // Find and delete the favorite recipe
    const deletedFavorite = await prisma.favoriteRecipe.deleteMany({
      where: {
        recipeName: recipeName,
        userId: null, // For now, we're not using user authentication
      },
    });

    if (deletedFavorite.count === 0) {
      return NextResponse.json(
        { error: "Favorite recipe not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Favorite recipe deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting favorite recipe:", error);
    return NextResponse.json(
      { error: "Failed to delete favorite recipe" },
      { status: 500 }
    );
  }
}
