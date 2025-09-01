import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

type AllergiesSectionProps = {
  allergies: string[];
  newAllergy: string;
  setNewAllergy: (allergy: string) => void;
  addAllergy: () => void;
  removeAllergy: (allergy: string) => void;
};

export function AllergiesSection({
  allergies,
  newAllergy,
  setNewAllergy,
  addAllergy,
  removeAllergy,
}: AllergiesSectionProps) {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium text-gray-800">🚫 Allergier</h4>
      <p className="text-sm text-gray-600">
        Lägg till allergier så vi kan undvika dem i receptförslag
      </p>

      <div className="flex gap-2">
        <Input
          type="text"
          value={newAllergy}
          onChange={(e) => setNewAllergy(e.target.value)}
          placeholder="T.ex. nötter, ägg, gluten"
          onKeyPress={(e) => e.key === "Enter" && addAllergy()}
          className="flex-1"
        />
        <Button onClick={addAllergy} size="sm" variant="outline">
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {allergies.map((allergy, index) => (
          <Badge
            key={index}
            variant="destructive"
            className="flex items-center gap-1"
          >
            {allergy}
            <button
              onClick={() => removeAllergy(allergy)}
              className="ml-1 hover:bg-red-700 rounded-full"
            >
              <X className="w-3 h-3" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
