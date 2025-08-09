import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

// DELETE - Remove a favorite recipe by name
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ recipeName: string }> }
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
    const recipeName = decodeURIComponent(resolvedParams.recipeName);

    // Find and delete the favorite recipe for this user
    const deletedFavorite = await prisma.favoriteRecipe.deleteMany({
      where: {
        recipeName: recipeName,
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
