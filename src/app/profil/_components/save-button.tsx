import { Save } from "lucide-react";

type SaveButtonProps = {
  saving: boolean;
  saveProfile: () => void;
};

export function SaveButton({ saving, saveProfile }: SaveButtonProps) {
  return (
    <div className="text-center pt-4">
      <button
        onClick={saveProfile}
        disabled={saving}
        className="inline-flex items-center gap-2 h-14 px-10 rounded-full uppercase font-bold text-[10px] tracking-[0.3em] disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: "#01472e",
          color: "#ccd5ae",
          boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
          transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {saving ? (
          "SPARAR..."
        ) : (
          <>
            <Save className="w-4 h-4" />
            SPARA PROFIL
          </>
        )}
      </button>
    </div>
  );
}
