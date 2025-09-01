import { useState } from "react";
import { useSaveProfile, useChangePassword } from "./use-profile";
import { usePasswordChange } from "./use-password-change";

type ProfileData = {
  name: string;
  allergies: string[];
  dietaryPrefs: string[];
};

export const useProfileActions = (profileData: ProfileData | undefined) => {
  const [message, setMessage] = useState("");
  const saveProfileMutation = useSaveProfile();
  const changePasswordMutation = useChangePassword();
  const passwordChange = usePasswordChange();

  const saveProfile = async () => {
    try {
      setMessage("");

      await saveProfileMutation.mutateAsync({
        name: profileData?.name ?? "",
        allergies: profileData?.allergies ?? [],
        dietaryPrefs: profileData?.dietaryPrefs ?? [],
      });

      setMessage("Profil sparad framgångsrikt!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error saving profile:", error);
      setMessage(
        `Fel: ${
          error instanceof Error ? error.message : "Kunde inte spara profilen"
        }`
      );
    }
  };

  const changePassword = async () => {
    try {
      passwordChange.clearMessage();

      const validation = passwordChange.validatePassword();
      if (!validation.isValid) {
        passwordChange.updatePassword("message", validation.message);
        return;
      }

      await changePasswordMutation.mutateAsync({
        currentPassword: passwordChange.passwordState.currentPassword,
        newPassword: passwordChange.passwordState.newPassword,
      });

      passwordChange.updatePassword(
        "message",
        "Lösenordet har ändrats framgångsrikt!"
      );
      setTimeout(() => passwordChange.clearMessage(), 5000);

      passwordChange.resetPasswordFields();
    } catch (error) {
      console.error("Error changing password:", error);
      passwordChange.updatePassword(
        "message",
        `Fel: ${
          error instanceof Error ? error.message : "Kunde inte ändra lösenordet"
        }`
      );
    }
  };

  return {
    message,
    setMessage,
    saveProfile,
    changePassword,
    passwordChange,
    saveProfileMutation,
    changePasswordMutation,
  };
};
