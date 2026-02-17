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

  const inputStyle = {
    background: "rgba(254,250,224,0.8)",
    border: "2px solid rgba(163,177,138,0.3)",
    borderRadius: "1.25rem",
    color: "#01472e",
    transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <div style={{ borderTop: "1px solid rgba(163,177,138,0.3)" }} className="pt-8">
      <div className="flex items-center justify-between mb-4">
        <p
          className="uppercase font-bold text-[10px] tracking-[0.2em]"
          style={{ color: "rgba(1,71,46,0.4)" }}
        >
          SÄKERHET
        </p>
        <button
          onClick={handleTogglePasswordSection}
          className="inline-flex items-center gap-2 uppercase font-bold text-[10px] tracking-[0.2em] px-5 py-2.5 rounded-full"
          style={{
            color: "rgba(1,71,46,0.5)",
            border: "1px solid rgba(163,177,138,0.3)",
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <Lock className="w-3.5 h-3.5" />
          {showPasswordSection ? "AVBRYT" : "BYT LÖSENORD"}
        </button>
      </div>

      {showPasswordSection && (
        <div
          className="space-y-4 p-6 mt-4"
          style={{
            borderRadius: "1.5rem",
            background: "rgba(233,237,201,0.4)",
          }}
        >
          {passwordMessage && (
            <div
              className="p-4 text-sm"
              style={{
                borderRadius: "1.25rem",
                background: passwordMessage.includes("Fel")
                  ? "rgba(254,242,242,1)"
                  : "rgba(204,213,174,0.4)",
                color: passwordMessage.includes("Fel")
                  ? "rgba(185,28,28,0.8)"
                  : "rgba(1,71,46,0.7)",
                border: `1px solid ${
                  passwordMessage.includes("Fel")
                    ? "rgba(185,28,28,0.2)"
                    : "rgba(163,177,138,0.3)"
                }`,
              }}
            >
              {passwordMessage}
            </div>
          )}

          <div className="space-y-1.5">
            <label
              className="uppercase font-bold text-[9px] tracking-[0.2em] block"
              style={{ color: "rgba(1,71,46,0.4)" }}
            >
              NUVARANDE LÖSENORD
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Ange ditt nuvarande lösenord"
                className="w-full h-12 px-5 pr-12 text-sm focus:outline-none"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#01472e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: "rgba(1,71,46,0.3)", transition: "color 0.2s" }}
              >
                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              className="uppercase font-bold text-[9px] tracking-[0.2em] block"
              style={{ color: "rgba(1,71,46,0.4)" }}
            >
              NYTT LÖSENORD
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Ange nytt lösenord (minst 6 tecken)"
                className="w-full h-12 px-5 pr-12 text-sm focus:outline-none"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#01472e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: "rgba(1,71,46,0.3)", transition: "color 0.2s" }}
              >
                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              className="uppercase font-bold text-[9px] tracking-[0.2em] block"
              style={{ color: "rgba(1,71,46,0.4)" }}
            >
              BEKRÄFTA NYTT LÖSENORD
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Bekräfta ditt nya lösenord"
                className="w-full h-12 px-5 pr-12 text-sm focus:outline-none"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#01472e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ color: "rgba(1,71,46,0.3)", transition: "color 0.2s" }}
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            onClick={changePassword}
            disabled={changingPassword || !currentPassword || !newPassword || !confirmPassword}
            className="w-full h-12 rounded-full flex items-center justify-center gap-2 uppercase font-bold text-[10px] tracking-[0.3em] disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              background: "#01472e",
              color: "#ccd5ae",
              boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
              transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {changingPassword ? (
              "ÄNDRAR..."
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                ÄNDRA LÖSENORD
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
