import { Plus, X } from "lucide-react";

type DietaryPrefsSectionProps = {
  dietaryPrefs: string[];
  newDietaryPref: string;
  setNewDietaryPref: (pref: string) => void;
  addDietaryPref: () => void;
  removeDietaryPref: (pref: string) => void;
};

export function DietaryPrefsSection({
  dietaryPrefs,
  newDietaryPref,
  setNewDietaryPref,
  addDietaryPref,
  removeDietaryPref,
}: DietaryPrefsSectionProps) {
  return (
    <div className="space-y-4">
      <div>
        <p
          className="uppercase font-bold text-[10px] tracking-[0.2em] mb-1"
          style={{ color: "rgba(1,71,46,0.4)" }}
        >
          KOSTPREFERENSER
        </p>
        <p className="text-sm" style={{ color: "rgba(1,71,46,0.5)" }}>
          Berätta om dina kostpreferenser för bättre receptförslag
        </p>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={newDietaryPref}
          onChange={(e) => setNewDietaryPref(e.target.value)}
          placeholder="T.ex. vegetarian, vegansk, keto, lchf"
          onKeyDown={(e) => e.key === "Enter" && addDietaryPref()}
          className="flex-1 h-12 px-5 text-sm focus:outline-none"
          style={{
            background: "rgba(233,237,201,0.5)",
            border: "2px solid rgba(163,177,138,0.3)",
            borderRadius: "2.5rem",
            color: "#01472e",
            transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#01472e")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
        />
        <button
          onClick={addDietaryPref}
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: "#01472e",
            color: "#ccd5ae",
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {dietaryPrefs.map((pref, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1.5 px-4 py-2 uppercase font-bold text-[9px] tracking-[0.2em] rounded-full"
            style={{
              background: "rgba(204,213,174,0.5)",
              color: "rgba(1,71,46,0.6)",
            }}
          >
            {pref}
            <button
              onClick={() => removeDietaryPref(pref)}
              className="rounded-full p-0.5"
              style={{ transition: "background 0.2s" }}
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
