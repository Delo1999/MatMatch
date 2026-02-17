"use client";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { signUpSchema, type SignUpInput } from "@/app/_schemas/auth";
import { validateClientSide } from "@/lib/validation";

type SignUpFormProps = {
  onSwitchToSignIn: () => void;
  onClose?: () => void;
};

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
      const validation = validateClientSide(signUpSchema, formData);
      if (!validation.success) {
        const firstError = Object.values(validation.errors)[0];
        setError(firstError || "Valideringsfel");
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
          REGISTRERA
        </h2>
        <p className="text-sm mt-3" style={{ color: "rgba(1,71,46,0.5)" }}>
          Skapa ditt MatMatch-konto
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div
            className="px-4 py-3 text-sm"
            style={{
              borderRadius: "1.25rem",
              background: "rgba(254,242,242,1)",
              border: "1px solid rgba(185,28,28,0.2)",
              color: "rgba(185,28,28,0.8)",
            }}
          >
            {error}
          </div>
        )}

        <div className="space-y-1.5">
          <label
            className="uppercase font-bold text-[9px] tracking-[0.2em] block"
            style={{ color: "rgba(1,71,46,0.4)" }}
          >
            NAMN (VALFRITT)
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            disabled={loading}
            className="w-full h-14 px-5 text-sm focus:outline-none"
            style={inputStyle}
            placeholder="Ditt namn"
            onFocus={(e) => (e.target.style.borderColor = "#01472e")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
          />
          {getFieldError("name") && (
            <p className="text-xs mt-1" style={{ color: "rgba(185,28,28,0.7)" }}>
              {getFieldError("name")}
            </p>
          )}
        </div>

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
            onChange={(e) => updateField("email", e.target.value)}
            required
            disabled={loading}
            className="w-full h-14 px-5 text-sm focus:outline-none"
            style={inputStyle}
            placeholder="din@email.se"
            onFocus={(e) => (e.target.style.borderColor = "#01472e")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
          />
          {getFieldError("email") && (
            <p className="text-xs mt-1" style={{ color: "rgba(185,28,28,0.7)" }}>
              {getFieldError("email")}
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
            onChange={(e) => updateField("password", e.target.value)}
            required
            disabled={loading}
            className="w-full h-14 px-5 text-sm focus:outline-none"
            style={inputStyle}
            placeholder="Välj ett lösenord"
            onFocus={(e) => (e.target.style.borderColor = "#01472e")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
          />
          <p className="text-[10px] mt-1" style={{ color: "rgba(1,71,46,0.35)" }}>
            Minst 6 tecken, max 60, med minst en stor bokstav, en liten och en siffra.
          </p>
          {getFieldError("password") && (
            <p className="text-xs mt-1" style={{ color: "rgba(185,28,28,0.7)" }}>
              {getFieldError("password")}
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
          {loading ? "REGISTRERAR..." : "REGISTRERA DIG"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm" style={{ color: "rgba(1,71,46,0.5)" }}>
          Har du redan ett konto?{" "}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="font-bold underline"
            style={{
              color: "#01472e",
              transition: "opacity 0.3s",
            }}
            disabled={loading}
          >
            Logga in
          </button>
        </p>
      </div>
    </div>
  );
}
