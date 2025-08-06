import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { authConfig, isValidPassword } from "@/config/auth";

export async function PUT(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const { currentPassword, newPassword } = await request.json();

    // Validera input
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "Nuvarande lösenord och nytt lösenord krävs" },
        { status: 400 }
      );
    }

    if (!isValidPassword(newPassword)) {
      return NextResponse.json(
        {
          error: `Nytt lösenord måste vara minst ${authConfig.password.minLength} tecken långt`,
        },
        { status: 400 }
      );
    }

    // Hämta användaren med lösenord för verifiering
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

    // Verifiera nuvarande lösenord
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

    // Kontrollera att det nya lösenordet inte är samma som det gamla
    const isSamePassword = await bcrypt.compare(newPassword, userData.password);
    if (isSamePassword) {
      return NextResponse.json(
        { error: "Det nya lösenordet måste vara annorlunda än det nuvarande" },
        { status: 400 }
      );
    }

    // Hasha det nya lösenordet
    const hashedNewPassword = await bcrypt.hash(
      newPassword,
      authConfig.security.bcryptRounds
    );

    // Uppdatera lösenordet i databasen
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
