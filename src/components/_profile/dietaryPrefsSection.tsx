import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

interface DietaryPrefsSectionProps {
  dietaryPrefs: string[];
  newDietaryPref: string;
  setNewDietaryPref: (pref: string) => void;
  addDietaryPref: () => void;
  removeDietaryPref: (pref: string) => void;
}

export function DietaryPrefsSection({
  dietaryPrefs,
  newDietaryPref,
  setNewDietaryPref,
  addDietaryPref,
  removeDietaryPref,
}: DietaryPrefsSectionProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-gray-800">❤️ Kostpreferenser</h4>
      <p className="text-sm text-gray-600">
        Berätta om dina kostpreferenser för bättre receptförslag
      </p>

      <div className="flex gap-2">
        <Input
          type="text"
          value={newDietaryPref}
          onChange={(e) => setNewDietaryPref(e.target.value)}
          placeholder="T.ex. vegetarian, vegansk, keto, lchf"
          onKeyPress={(e) => e.key === "Enter" && addDietaryPref()}
          className="flex-1"
        />
        <Button onClick={addDietaryPref} size="sm" variant="outline">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {dietaryPrefs.map((pref, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="flex items-center gap-1"
          >
            {pref}
            <button
              onClick={() => removeDietaryPref(pref)}
              className="ml-1 hover:bg-gray-400 rounded-full"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
