import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { changePasswordSchema } from "@/app/schemas/auth";
import { authConfig } from "@/config/auth";

export async function PUT(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const validationResult = changePasswordSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }

    const { currentPassword, newPassword } = validationResult.data;

    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: { id: true, password: true },
    });

    if (!userData) {
      return NextResponse.json(
        { error: "Användare hittades inte" },
        { status: 404 }
      );
    }

    const isCurrentPasswordValid = await bcrypt.compare(
      currentPassword,
      userData.password
    );

    if (!isCurrentPasswordValid) {
      return NextResponse.json(
        { error: "Nuvarande lösenord är felaktigt" },
        { status: 400 }
      );
    }

    const isSamePassword = await bcrypt.compare(newPassword, userData.password);
    if (isSamePassword) {
      return NextResponse.json(
        { error: "Det nya lösenordet måste vara annorlunda än det nuvarande" },
        { status: 400 }
      );
    }

    const hashedNewPassword = await bcrypt.hash(
      newPassword,
      authConfig.security.bcryptRounds
    );

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword },
    });

    return NextResponse.json({
      message: "Lösenordet har ändrats framgångsrikt",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return NextResponse.json(
      { error: "Kunde inte ändra lösenordet" },
      { status: 500 }
    );
  }
}
