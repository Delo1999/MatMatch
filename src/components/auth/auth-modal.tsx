"use client";
import { useState, useEffect } from "react";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";
import { X } from "lucide-react";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "signin" | "signup";
};

export function AuthModal({
  isOpen,
  onClose,
  defaultMode = "signin",
}: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setMode("signin");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={handleClose}
        style={{
          background: "rgba(1,71,46,0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      {/* Modal content */}
      <div
        className="relative z-10 w-full max-w-md mx-4"
        style={{
          animation: "reveal-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-14 right-0 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(254,250,224,0.15)",
            backdropFilter: "blur(4px)",
            color: "#ccd5ae",
            transition: "background 0.3s",
          }}
        >
          <X className="w-4 h-4" />
        </button>

        {mode === "signin" ? (
          <SignInForm
            onSwitchToSignUp={() => setMode("signup")}
            onClose={handleClose}
          />
        ) : (
          <SignUpForm
            onSwitchToSignIn={() => setMode("signin")}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
