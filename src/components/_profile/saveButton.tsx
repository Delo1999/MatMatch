import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

interface SaveButtonProps {
  saving: boolean;
  saveProfile: () => void;
}

export function SaveButton({ saving, saveProfile }: SaveButtonProps) {
  return (
    <div className="text-center pt-4">
      <Button
        onClick={saveProfile}
        disabled={saving}
        className="bg-green-600 hover:bg-green-700 text-white px-8"
      >
        {saving ? (
          "Sparar..."
        ) : (
          <>
            <Save className="w-4 h-4 mr-2" />
            Spara profil
          </>
        )}
      </Button>
    </div>
  );
}
