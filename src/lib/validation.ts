import { NextResponse } from "next/server";
import { ZodError, ZodSchema } from "zod";

export function validateRequest<T>(
  schema: ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; response: NextResponse } {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof ZodError) {
      // Format validation errors consistently
      const formattedErrors = error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return {
        success: false,
        response: NextResponse.json(
          {
            error: "Valideringsfel",
            details: formattedErrors,
            timestamp: new Date().toISOString(),
          },
          { status: 400 }
        ),
      };
    }

    return {
      success: false,
      response: NextResponse.json(
        { error: "Ogiltig förfrågan" },
        { status: 400 }
      ),
    };
  }
}

export function validateClientSide<T>(
  schema: ZodSchema<T>,
  data: unknown
):
  | { success: true; data: T }
  | { success: false; errors: Record<string, string> } {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((err) => {
        const field = err.path[0]?.toString() || "general";
        errors[field] = err.message;
      });
      return { success: false, errors };
    }
    return { success: false, errors: { general: "Oväntat valideringsfel" } };
  }
}
