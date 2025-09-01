import { useState } from "react";

type PasswordState = {
  showSection: boolean;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  showCurrentPassword: boolean;
  showNewPassword: boolean;
  showConfirmPassword: boolean;
  message: string;
};

export const usePasswordChange = () => {
  const [passwordState, setPasswordState] = useState<PasswordState>({
    showSection: false,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
    message: "",
  });

  const updatePassword = (
    field: keyof PasswordState,
    value: string | boolean
  ) => {
    setPasswordState((prev) => ({ ...prev, [field]: value }));
  };

  const validatePassword = (): { isValid: boolean; message: string } => {
    if (passwordState.newPassword !== passwordState.confirmPassword) {
      return { isValid: false, message: "Lösenorden matchar inte" };
    }

    if (passwordState.newPassword.length < 6) {
      return {
        isValid: false,
        message: "Nytt lösenord måste vara minst 6 tecken långt",
      };
    }

    return { isValid: true, message: "" };
  };

  const resetPasswordFields = () => {
    updatePassword("currentPassword", "");
    updatePassword("newPassword", "");
    updatePassword("confirmPassword", "");
  };

  const clearMessage = () => {
    updatePassword("message", "");
  };

  return {
    passwordState,
    updatePassword,
    validatePassword,
    resetPasswordFields,
    clearMessage,
  };
};
