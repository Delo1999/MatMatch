import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE - Remove a saved recipe by name
export async function DELETE(
  request: NextRequest,
  { params }: { params: { recipeName: string } }
) {
  try {
    const recipeName = decodeURIComponent(params.recipeName);

    // Find and delete the recipe
    const deletedRecipe = await prisma.savedRecipe.deleteMany({
      where: {
        recipeName: recipeName,
        userId: null, // For now, we're not using user authentication
      },
    });

    if (deletedRecipe.count === 0) {
      return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    return NextResponse.json(
      { error: "Failed to delete recipe" },
      { status: 500 }
    );
  }
}
