"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { signInSchema, SignInInput } from "@/app/schemas/auth";

interface SignInFormProps {
  onSwitchToSignUp: () => void;
  onClose?: () => void;
}

export function SignInForm({ onSwitchToSignUp, onClose }: SignInFormProps) {
  const [formData, setFormData] = useState<SignInInput>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { signIn } = useAuth();

  const validateForm = () => {
    try {
      signInSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "errors" in error &&
        Array.isArray((error as { errors: unknown }).errors)
      ) {
        type ZodIssue = { path: (string | number)[]; message: string };
        const zodError = error as { errors: ZodIssue[] };
        const newErrors: Record<string, string> = {};
        zodError.errors.forEach((err) => {
          const field =
            typeof err.path[0] === "string" ? err.path[0] : String(err.path[0]);
          newErrors[field] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate client-side first
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      await signIn(formData.email, formData.password);
      onClose?.();
    } catch (err) {
      if (err instanceof Error) {
        // Handle server validation errors
        try {
          const errorData = JSON.parse(err.message);
          if (errorData.details) {
            const newErrors: Record<string, string> = {};
            errorData.details.forEach(
              (detail: { field: string; message: string }) => {
                newErrors[detail.field] = detail.message;
              }
            );
            setErrors(newErrors);
          } else {
            setErrors({ general: errorData.error || err.message });
          }
        } catch {
          setErrors({ general: err.message });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-gray-800">
          Logga in
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {errors.general}
            </div>
          )}

          <div>
            <Input
              type="email"
              placeholder="E-post"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev: typeof formData) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              disabled={loading}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Lösenord"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev: typeof formData) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              disabled={loading}
              className={errors.password ? "border-red-500" : ""}
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Loggar in..." : "Logga in"}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Har du inget konto?{" "}
            <button
              type="button"
              onClick={onSwitchToSignUp}
              className="text-green-600 hover:text-green-700 font-medium"
              disabled={loading}
            >
              Registrera dig
            </button>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
