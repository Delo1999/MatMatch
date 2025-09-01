import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { authConfig } from "@/config/auth";

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
}

export async function getCurrentUser(
  request: NextRequest
): Promise<AuthUser | null> {
  try {
    const token = request.cookies.get(authConfig.cookies.name)?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, authConfig.jwt.secret) as {
      userId: string;
      email: string;
    };

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export function requireAuth(request: NextRequest) {
  return getCurrentUser(request);
}
