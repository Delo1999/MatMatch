"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";

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

  const handleClose = () => {
    setMode("signin");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 bg-transparent border-none shadow-none">
        <DialogTitle className="sr-only">
          {mode === "signin" ? "Logga in" : "Registrera dig"}
        </DialogTitle>
        <div className="flex items-center justify-center">
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
      </DialogContent>
    </Dialog>
  );
}
