"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { signUpSchema, type SignUpInput } from "@/app/schemas/auth";
import { validateRequest } from "@/lib/validation";

interface SignUpFormProps {
  onSwitchToSignIn: () => void;
  onClose?: () => void;
}

export function SignUpForm({ onSwitchToSignIn, onClose }: SignUpFormProps) {
  const [formData, setFormData] = useState<SignUpInput>({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const validation = validateRequest(signUpSchema, formData);
      if (!validation.success) {
        if (validation.response.status === 400) {
          const errorData = await validation.response.json();
          setError(errorData.error || "Validation failed");
        } else {
          setError("Validation failed");
        }
        setLoading(false);
        return;
      }

      const { email, password, name } = validation.data;
      await signUp(email, password, name || undefined);
      onClose?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: keyof SignUpInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const getFieldError = (field: keyof SignUpInput) => {
    try {
      signUpSchema.parse(formData);
      return "";
    } catch (err) {
      if (err instanceof Error) {
        try {
          const zodError = JSON.parse(err.message);
          const fieldError = zodError.find(
            (e: { path: string[]; message: string }) => e.path.includes(field)
          );
          return fieldError?.message || "";
        } catch {
          return "";
        }
      }
      return "";
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-gray-800">
          Registrera dig
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <Input
              type="text"
              placeholder="Namn (valfritt)"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              disabled={loading}
            />
            {getFieldError("name") && (
              <div className="mt-1 text-xs text-red-500">
                {getFieldError("name")}
              </div>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="E-post"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
              disabled={loading}
            />
            {getFieldError("email") && (
              <div className="mt-1 text-xs text-red-500">
                {getFieldError("email")}
              </div>
            )}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Lösenord"
              value={formData.password}
              onChange={(e) => updateField("password", e.target.value)}
              required
              disabled={loading}
            />
            <div className="mt-1 text-xs text-gray-500">
              Lösenordet måste innehålla minst 6 tecken, max 60 tecken, med
              minst en stor bokstav, en liten bokstav och en siffra.
            </div>
            {getFieldError("password") && (
              <div className="mt-1 text-xs text-red-500">
                {getFieldError("password")}
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Registrerar..." : "Registrera dig"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Har du redan ett konto?{" "}
            <button
              type="button"
              onClick={onSwitchToSignIn}
              className="text-green-600 hover:text-green-700 font-medium"
              disabled={loading}
            >
              Logga in
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
