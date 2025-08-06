import { NextResponse } from "next/server";
import { authConfig } from "@/config/auth";

export async function POST() {
  try {
    const response = NextResponse.json({
      message: "Sign out successful",
    });

    // Clear the auth token cookie
    response.cookies.set(authConfig.cookies.name, "", {
      httpOnly: authConfig.cookies.httpOnly,
      secure: authConfig.cookies.secure,
      sameSite: authConfig.cookies.sameSite,
      maxAge: 0, // Expire immediately
      path: authConfig.cookies.path,
    });

    return response;
  } catch (error) {
    console.error("Error signing out:", error);
    return NextResponse.json({ error: "Failed to sign out" }, { status: 500 });
  }
}
