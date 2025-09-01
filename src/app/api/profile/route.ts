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

    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        email: true,
        name: true,
        allergies: true,
        dietaryPrefs: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const profile = {
      ...userData,
      allergies: userData.allergies ? JSON.parse(userData.allergies) : [],
      dietaryPrefs: userData.dietaryPrefs
        ? JSON.parse(userData.dietaryPrefs)
        : [],
    };

    return NextResponse.json({ profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const { name, allergies, dietaryPrefs } = await request.json();

    if (allergies && !Array.isArray(allergies)) {
      return NextResponse.json(
        { error: "Allergies must be an array" },
        { status: 400 }
      );
    }

    if (dietaryPrefs && !Array.isArray(dietaryPrefs)) {
      return NextResponse.json(
        { error: "Dietary preferences must be an array" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        name: name || user.name,
        allergies: allergies ? JSON.stringify(allergies) : null,
        dietaryPrefs: dietaryPrefs ? JSON.stringify(dietaryPrefs) : null,
      },
      select: {
        id: true,
        email: true,
        name: true,
        allergies: true,
        dietaryPrefs: true,
        updatedAt: true,
      },
    });

    const profile = {
      ...updatedUser,
      allergies: updatedUser.allergies ? JSON.parse(updatedUser.allergies) : [],
      dietaryPrefs: updatedUser.dietaryPrefs
        ? JSON.parse(updatedUser.dietaryPrefs)
        : [],
    };

    return NextResponse.json({
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
