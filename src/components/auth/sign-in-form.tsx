"use client";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { signInSchema, SignInInput } from "@/app/_schemas/auth";

type SignInFormProps = {
  onSwitchToSignUp: () => void;
  onClose?: () => void;
};

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
            typeof err.path[0] === "string"
              ? err.path[0]
              : String(err.path[0]);
          newErrors[field] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      await signIn(formData.email, formData.password);
      onClose?.();
    } catch (err) {
      if (err instanceof Error) {
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

  const inputStyle = {
    background: "rgba(233,237,201,0.5)",
    border: "2px solid rgba(163,177,138,0.3)",
    borderRadius: "1.25rem",
    color: "#01472e",
    transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <div
      className="w-full max-w-md p-8 md:p-10"
      style={{
        borderRadius: "2.5rem",
        background: "#fefae0",
        boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
      }}
    >
      <div className="text-center mb-8">
        <h2
          className="leading-[0.85] tracking-[-0.03em]"
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#01472e",
          }}
        >
          LOGGA IN
        </h2>
        <p className="text-sm mt-3" style={{ color: "rgba(1,71,46,0.5)" }}>
          Välkommen tillbaka till MatMatch
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {errors.general && (
          <div
            className="px-4 py-3 text-sm"
            style={{
              borderRadius: "1.25rem",
              background: "rgba(254,242,242,1)",
              border: "1px solid rgba(185,28,28,0.2)",
              color: "rgba(185,28,28,0.8)",
            }}
          >
            {errors.general}
          </div>
        )}

        <div className="space-y-1.5">
          <label
            className="uppercase font-bold text-[9px] tracking-[0.2em] block"
            style={{ color: "rgba(1,71,46,0.4)" }}
          >
            E-POST
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            disabled={loading}
            className="w-full h-14 px-5 text-sm focus:outline-none"
            style={{
              ...inputStyle,
              borderColor: errors.email
                ? "rgba(185,28,28,0.4)"
                : "rgba(163,177,138,0.3)",
            }}
            placeholder="din@email.se"
            onFocus={(e) => (e.target.style.borderColor = "#01472e")}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.email
                ? "rgba(185,28,28,0.4)"
                : "rgba(163,177,138,0.3)")
            }
          />
          {errors.email && (
            <p className="text-xs mt-1" style={{ color: "rgba(185,28,28,0.7)" }}>
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            className="uppercase font-bold text-[9px] tracking-[0.2em] block"
            style={{ color: "rgba(1,71,46,0.4)" }}
          >
            LÖSENORD
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            disabled={loading}
            className="w-full h-14 px-5 text-sm focus:outline-none"
            style={{
              ...inputStyle,
              borderColor: errors.password
                ? "rgba(185,28,28,0.4)"
                : "rgba(163,177,138,0.3)",
            }}
            placeholder="Ditt lösenord"
            onFocus={(e) => (e.target.style.borderColor = "#01472e")}
            onBlur={(e) =>
              (e.target.style.borderColor = errors.password
                ? "rgba(185,28,28,0.4)"
                : "rgba(163,177,138,0.3)")
            }
          />
          {errors.password && (
            <p className="text-xs mt-1" style={{ color: "rgba(185,28,28,0.7)" }}>
              {errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-14 rounded-full uppercase font-bold text-[10px] tracking-[0.3em] disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: "#01472e",
            color: "#ccd5ae",
            boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
            transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
          disabled={loading}
        >
          {loading ? "LOGGAR IN..." : "LOGGA IN"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm" style={{ color: "rgba(1,71,46,0.5)" }}>
          Har du inget konto?{" "}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="font-bold underline"
            style={{
              color: "#01472e",
              transition: "opacity 0.3s",
            }}
            disabled={loading}
          >
            Registrera dig
          </button>
        </p>
      </div>
    </div>
  );
}
