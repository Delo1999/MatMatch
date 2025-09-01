import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import { authConfig } from "@/config/auth";
import { signInSchema } from "@/app/schemas/auth";
import { validateRequest } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = validateRequest(signInSchema, body);
    if (!validation.success) {
      return validation.response;
    }

    const { email, password } = validation.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      authConfig.jwt.secret,
      {
        expiresIn: authConfig.jwt.expiresIn,
      } as SignOptions
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    const response = NextResponse.json({
      message: "Sign in successful",
      user: userWithoutPassword,
    });

    response.cookies.set(authConfig.cookies.name, token, {
      httpOnly: authConfig.cookies.httpOnly,
      secure: authConfig.cookies.secure,
      sameSite: authConfig.cookies.sameSite,
      maxAge: authConfig.cookies.maxAge,
      path: authConfig.cookies.path,
    });

    return response;
  } catch (error) {
    console.error("Error signing in:", error);
    return NextResponse.json({ error: "Failed to sign in" }, { status: 500 });
  }
}
