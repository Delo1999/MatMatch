import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "E-post får inte vara tom" })
    .email({ message: "Ogiltig e-postadress" })
    .toLowerCase(),
  password: z
    .string()
    .min(1, { message: "Lösenord får inte vara tomt" })
    .min(6, { message: "Lösenordet måste vara minst 6 tecken långt" }),
});

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, { message: "E-post får inte vara tom" })
    .email({ message: "Ogiltig e-postadress" })
    .toLowerCase(),
  password: z
    .string()
    .min(6, { message: "Lösenordet måste vara minst 6 tecken långt" })
    .max(60, { message: "Lösenordet får inte vara längre än 60 tecken" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Lösenordet måste innehålla minst en stor bokstav, en liten bokstav och en siffra"
    ),
  name: z
    .string()
    .trim()
    .max(50, "Namnet får inte vara längre än 50 tecken")
    .optional()
    .or(z.literal("")), // Allow empty string for optional name
});

export const profileUpdateSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Namn" })
    .max(50, { message: "Namnet får inte vara längre än 50 tecken" })
    .optional(),
  allergies: z
    .array(z.string().trim().min(1, { message: "Allergier" }))
    .optional(),
  dietaryPrefs: z
    .array(z.string().trim().min(1, { message: "Kostpreferenser" }))
    .optional(),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Nuvarande lösenord får inte vara tomt" }),
    newPassword: z
      .string()
      .min(6, { message: "Nytt lösenord måste vara minst 6 tecken långt" })
      .max(60, { message: "Lösenordet får inte vara längre än 60 tecken" }),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "Det nya lösenordet måste skilja sig från det nuvarande",
    path: ["newPassword"],
  });

// Auto-generated TypeScript types
export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
