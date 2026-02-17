"use client";
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
import { Footer } from "@/app/_components/footer";

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
      <main>
        <div
          className="h-screen flex flex-col items-center justify-center"
          style={{ background: "#01472e" }}
        >
          <h1
            className="leading-[0.75] tracking-[-0.05em] mb-6"
            style={{
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: "min(15vw, 180px)",
              color: "#ccd5ae",
            }}
          >
            LOGGA IN
          </h1>
          <p className="text-sm" style={{ color: "rgba(204,213,174,0.5)" }}>
            Du måste logga in för att se din profil.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <HeroSectionProfileComponent />

      {/* Settings section — olive bg, 5rem rounded top */}
      <section
        style={{
          background: "#e9edc9",
          borderTopLeftRadius: "5rem",
          borderTopRightRadius: "5rem",
        }}
        className="relative -mt-16 pt-24 md:pt-32 pb-24 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          {/* Heading row */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8 mb-16 animate-reveal">
            <h2
              className="leading-[0.9] tracking-[-0.03em] text-center"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                color: "#01472e",
                whiteSpace: "nowrap",
              }}
            >
              INSTÄLLNINGAR
            </h2>
          </div>

          {/* Settings card */}
          <div
            className="animate-reveal-delay-1 p-8 md:p-12"
            style={{
              borderRadius: "2.5rem",
              background: "rgba(254,250,224,0.8)",
              border: "1px solid rgba(163,177,138,0.3)",
              boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
            }}
          >
            {profileQuery.isLoading ? (
              <div className="text-center py-16">
                <div className="w-6 h-6 border-2 border-forest border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-sm" style={{ color: "rgba(1,71,46,0.4)" }}>
                  Laddar profil...
                </p>
              </div>
            ) : (
              <div className="space-y-10">
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
