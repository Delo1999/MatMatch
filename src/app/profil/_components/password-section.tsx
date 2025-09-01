import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Eye, EyeOff } from "lucide-react";

type PasswordSectionProps = {
  showPasswordSection: boolean;
  setShowPasswordSection: (show: boolean) => void;
  currentPassword: string;
  setCurrentPassword: (password: string) => void;
  newPassword: string;
  setNewPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  showCurrentPassword: boolean;
  setShowCurrentPassword: (show: boolean) => void;
  showNewPassword: boolean;
  setShowNewPassword: (show: boolean) => void;
  showConfirmPassword: boolean;
  setShowConfirmPassword: (show: boolean) => void;
  passwordMessage: string;
  changingPassword: boolean;
  changePassword: () => void;
};

export function PasswordSection({
  showPasswordSection,
  setShowPasswordSection,
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  showCurrentPassword,
  setShowCurrentPassword,
  showNewPassword,
  setShowNewPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  passwordMessage,
  changingPassword,
  changePassword,
}: PasswordSectionProps) {
  const handleTogglePasswordSection = () => {
    setShowPasswordSection(!showPasswordSection);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="border-t pt-8">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-medium text-gray-800">🔒 Säkerhet</h4>
        <Button
          onClick={handleTogglePasswordSection}
          variant="outline"
          size="sm"
        >
          <Lock className="w-4 h-4 mr-2" />
          {showPasswordSection ? "Avbryt" : "Byt lösenord"}
        </Button>
      </div>

      {showPasswordSection && (
        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
          {passwordMessage && (
            <div
              className={`p-3 rounded-lg text-sm ${
                passwordMessage.includes("Fel")
                  ? "bg-red-50 text-red-700"
                  : "bg-green-50 text-green-700"
              }`}
            >
              {passwordMessage}
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nuvarande lösenord
            </label>
            <div className="relative">
              <Input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Ange ditt nuvarande lösenord"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showCurrentPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nytt lösenord
            </label>
            <div className="relative">
              <Input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Ange nytt lösenord (minst 6 tecken)"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Bekräfta nytt lösenord
            </label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Bekräfta ditt nya lösenord"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <Button
            onClick={changePassword}
            disabled={
              changingPassword ||
              !currentPassword ||
              !newPassword ||
              !confirmPassword
            }
            className="w-full bg-orange-600 hover:bg-orange-700 text-white"
          >
            {changingPassword ? (
              "Ändrar lösenord..."
            ) : (
              <>
                <Lock className="w-4 h-4 mr-2" />
                Ändra lösenord
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
