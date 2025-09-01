"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { HeroSectionProfileComponent } from "./_components/hero-section-profile-component";
import { UserInfo } from "./_components/user-info";
import { MessageDisplay } from "./_components/message-display";
import { AllergiesSection } from "./_components/allergies-section";
import { DietaryPrefsSection } from "./_components/dietary-prefs-section";
import { PasswordSection } from "./_components/password-section";
import { SaveButton } from "./_components/save-button";
import { useProfile } from "./_hooks/use-profile";
import { useAllergies } from "./_hooks/use-allergies";
import { useDietaryPrefs } from "./_hooks/use-dietary-prefs";
import { useProfileActions } from "./_hooks/use-profile-actions";
import { usePasswordChange } from "./_hooks/use-password-change";

export default function ProfilPage() {
  const { user } = useAuth();
  const profileQuery = useProfile();

  const allergies = profileQuery.data?.allergies || [];
  const dietaryPrefs = profileQuery.data?.dietaryPrefs || [];

  const allergiesHook = useAllergies(allergies);
  const dietaryPrefsHook = useDietaryPrefs(dietaryPrefs);
  const profileActions = useProfileActions(profileQuery.data);
  const passwordChange = usePasswordChange();

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
                <MessageDisplay message={profileActions.message} />

                <AllergiesSection
                  allergies={allergies}
                  newAllergy={allergiesHook.newAllergy}
                  setNewAllergy={allergiesHook.setNewAllergy}
                  addAllergy={allergiesHook.addAllergy}
                  removeAllergy={allergiesHook.removeAllergy}
                />

                <DietaryPrefsSection
                  dietaryPrefs={dietaryPrefs}
                  newDietaryPref={dietaryPrefsHook.newDietaryPref}
                  setNewDietaryPref={dietaryPrefsHook.setNewDietaryPref}
                  addDietaryPref={dietaryPrefsHook.addDietaryPref}
                  removeDietaryPref={dietaryPrefsHook.removeDietaryPref}
                />

                <PasswordSection
                  showPasswordSection={passwordChange.passwordState.showSection}
                  setShowPasswordSection={(value) =>
                    passwordChange.updatePassword("showSection", value)
                  }
                  currentPassword={passwordChange.passwordState.currentPassword}
                  setCurrentPassword={(value) =>
                    passwordChange.updatePassword("currentPassword", value)
                  }
                  newPassword={passwordChange.passwordState.newPassword}
                  setNewPassword={(value) =>
                    passwordChange.updatePassword("newPassword", value)
                  }
                  confirmPassword={passwordChange.passwordState.confirmPassword}
                  setConfirmPassword={(value) =>
                    passwordChange.updatePassword("confirmPassword", value)
                  }
                  showCurrentPassword={
                    passwordChange.passwordState.showCurrentPassword
                  }
                  setShowCurrentPassword={(value) =>
                    passwordChange.updatePassword("showCurrentPassword", value)
                  }
                  showNewPassword={passwordChange.passwordState.showNewPassword}
                  setShowNewPassword={(value) =>
                    passwordChange.updatePassword("showNewPassword", value)
                  }
                  showConfirmPassword={
                    passwordChange.passwordState.showConfirmPassword
                  }
                  setShowConfirmPassword={(value) =>
                    passwordChange.updatePassword("showConfirmPassword", value)
                  }
                  passwordMessage={passwordChange.passwordState.message}
                  changingPassword={
                    profileActions.changePasswordMutation.isPending
                  }
                  changePassword={profileActions.changePassword}
                />

                <SaveButton
                  saving={profileActions.saveProfileMutation.isPending}
                  saveProfile={profileActions.saveProfile}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
