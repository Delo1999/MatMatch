"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  HeroSectionProfileComponent,
  UserInfo,
  MessageDisplay,
  AllergiesSection,
  DietaryPrefsSection,
  PasswordSection,
  SaveButton,
} from "@/components/_profile/index";
import {
  useProfile,
  useSaveProfile,
  useChangePassword,
} from "@/hooks/useProfile";
import { useQueryClient } from "@tanstack/react-query";

type ProfileData = {
  name: string;
  allergies: string[];
  dietaryPrefs: string[];
};

export default function ProfilPage() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [message, setMessage] = useState("");

  const [newAllergy, setNewAllergy] = useState("");
  const [newDietaryPref, setNewDietaryPref] = useState("");

  const [passwordState, setPasswordState] = useState({
    showSection: false,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
    message: "",
  });

  const profileQuery = useProfile();
  const saveProfileMutation = useSaveProfile();
  const changePasswordMutation = useChangePassword();

  const allergies = profileQuery.data?.allergies || [];
  const dietaryPrefs = profileQuery.data?.dietaryPrefs || [];

  const updatePassword = (
    field: keyof typeof passwordState,
    value: string | boolean
  ) => {
    setPasswordState((prev) => ({ ...prev, [field]: value }));
  };

  const addAllergy = () => {
    if (newAllergy.trim() && !allergies.includes(newAllergy.trim())) {
      const newAllergies = [...allergies, newAllergy.trim()];

      queryClient.setQueryData(
        ["profile"],
        (old: ProfileData | undefined) =>
          ({
            ...old,
            allergies: newAllergies,
          } as ProfileData)
      );

      setNewAllergy("");
    }
  };

  const removeAllergy = (allergyToRemove: string) => {
    const updatedAllergies = allergies.filter(
      (allergy: string) => allergy !== allergyToRemove
    );

    queryClient.setQueryData(
      ["profile"],
      (old: ProfileData | undefined) =>
        ({
          ...old,
          allergies: updatedAllergies,
        } as ProfileData)
    );
  };

  const addDietaryPref = () => {
    if (
      newDietaryPref.trim() &&
      !dietaryPrefs.includes(newDietaryPref.trim())
    ) {
      const newDietaryPrefs = [...dietaryPrefs, newDietaryPref.trim()];

      queryClient.setQueryData(
        ["profile"],
        (old: ProfileData | undefined) =>
          ({
            ...old,
            dietaryPrefs: newDietaryPrefs,
          } as ProfileData)
      );

      setNewDietaryPref("");
    }
  };

  const removeDietaryPref = (prefToRemove: string) => {
    const updatedDietaryPrefs = dietaryPrefs.filter(
      (pref: string) => pref !== prefToRemove
    );

    queryClient.setQueryData(
      ["profile"],
      (old: ProfileData | undefined) =>
        ({
          ...old,
          dietaryPrefs: updatedDietaryPrefs,
        } as ProfileData)
    );
  };

  const saveProfile = async () => {
    try {
      setMessage("");

      await saveProfileMutation.mutateAsync({
        name: profileQuery.data?.name ?? "",
        allergies,
        dietaryPrefs,
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
      updatePassword("message", "");

      if (passwordState.newPassword !== passwordState.confirmPassword) {
        updatePassword("message", "Lösenorden matchar inte");
        return;
      }

      if (passwordState.newPassword.length < 6) {
        updatePassword(
          "message",
          "Nytt lösenord måste vara minst 6 tecken långt"
        );
        return;
      }

      await changePasswordMutation.mutateAsync({
        currentPassword: passwordState.currentPassword,
        newPassword: passwordState.newPassword,
      });

      updatePassword("message", "Lösenordet har ändrats framgångsrikt!");
      setTimeout(() => updatePassword("message", ""), 5000);

      updatePassword("currentPassword", "");
      updatePassword("newPassword", "");
      updatePassword("confirmPassword", "");
    } catch (error) {
      console.error("Error changing password:", error);
      updatePassword(
        "message",
        `Fel: ${
          error instanceof Error ? error.message : "Kunde inte ändra lösenordet"
        }`
      );
    }
  };

  if (!user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
        <div className="container mx-auto px-4 py-16 text-center">
          <p className="text-gray-600">
            Du måste logga in för att se din profil
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <HeroSectionProfileComponent />

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm border-green-100 gap-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-gray-800 pt-5">
              Profilinställningar
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Anpassa din MatMatch-upplevelse
            </p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            {profileQuery.isLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Laddar profil...</p>
              </div>
            ) : (
              <div className="space-y-8">
                <UserInfo user={user} />
                <MessageDisplay message={message} />

                <AllergiesSection
                  allergies={allergies}
                  newAllergy={newAllergy}
                  setNewAllergy={setNewAllergy}
                  addAllergy={addAllergy}
                  removeAllergy={removeAllergy}
                />

                <DietaryPrefsSection
                  dietaryPrefs={dietaryPrefs}
                  newDietaryPref={newDietaryPref}
                  setNewDietaryPref={setNewDietaryPref}
                  addDietaryPref={addDietaryPref}
                  removeDietaryPref={removeDietaryPref}
                />

                <PasswordSection
                  showPasswordSection={passwordState.showSection}
                  setShowPasswordSection={(value) =>
                    updatePassword("showSection", value)
                  }
                  currentPassword={passwordState.currentPassword}
                  setCurrentPassword={(value) =>
                    updatePassword("currentPassword", value)
                  }
                  newPassword={passwordState.newPassword}
                  setNewPassword={(value) =>
                    updatePassword("newPassword", value)
                  }
                  confirmPassword={passwordState.confirmPassword}
                  setConfirmPassword={(value) =>
                    updatePassword("confirmPassword", value)
                  }
                  showCurrentPassword={passwordState.showCurrentPassword}
                  setShowCurrentPassword={(value) =>
                    updatePassword("showCurrentPassword", value)
                  }
                  showNewPassword={passwordState.showNewPassword}
                  setShowNewPassword={(value) =>
                    updatePassword("showNewPassword", value)
                  }
                  showConfirmPassword={passwordState.showConfirmPassword}
                  setShowConfirmPassword={(value) =>
                    updatePassword("showConfirmPassword", value)
                  }
                  passwordMessage={passwordState.message}
                  changingPassword={changePasswordMutation.isPending}
                  changePassword={changePassword}
                />

                <SaveButton
                  saving={saveProfileMutation.isPending}
                  saveProfile={saveProfile}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
