"use client";
import { useState } from "react";
import { Bookmark, Clock, ChefHat } from "lucide-react";
import { ApiRecipe } from "@/types/recipe";

type RecipeCardHomeComponentProps = {
  recipe: ApiRecipe;
  isSaved: boolean;
  onSave: (recipe: ApiRecipe) => void;
  onRemove: (recipe: ApiRecipe) => void;
};

export function RecipeCardHomeComponent({
  recipe,
  isSaved,
  onSave,
  onRemove,
}: RecipeCardHomeComponentProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative">
      {/* Card with aspect-ratio 4/5 */}
      <div
        className="relative overflow-hidden cursor-pointer"
        style={{
          aspectRatio: "4/5",
          borderRadius: "2.5rem",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Card visual background */}
        <div
          className="absolute inset-0 flex flex-col justify-between p-6 md:p-8"
          style={{ background: "#ccd5ae" }}
        >
          {/* Top: label + icon */}
          <div className="flex items-start justify-between">
            <p
              className="uppercase font-bold text-[9px] tracking-[0.2em]"
              style={{ color: "rgba(1,71,46,0.4)" }}
            >
              RECEPT
            </p>
            <ChefHat className="w-5 h-5" style={{ color: "rgba(1,71,46,0.2)" }} />
          </div>

          {/* Center: recipe name */}
          <div className="flex-1 flex items-center">
            <h3
              className="leading-[0.85] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: "#01472e",
              }}
            >
              {recipe.recipeName.toUpperCase()}
            </h3>
          </div>

          {/* Bottom: time + ingredient count */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" style={{ color: "rgba(1,71,46,0.4)" }} />
              <span
                className="uppercase font-bold text-[9px] tracking-[0.15em]"
                style={{ color: "rgba(1,71,46,0.5)" }}
              >
                {recipe.estimatedTime.cookingTime}
              </span>
            </div>
            <span
              className="uppercase font-bold text-[9px] tracking-[0.15em]"
              style={{ color: "rgba(1,71,46,0.4)" }}
            >
              {recipe.fullIngredientsList.length} INGREDIENSER
            </span>
          </div>
        </div>

        {/* Hover overlay — blur-reveal button */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
          style={{
            background: "rgba(1,71,46,0.3)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1)",
            borderRadius: "2.5rem",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              isSaved ? onRemove(recipe) : onSave(recipe);
            }}
            className="flex items-center gap-2 group-hover:translate-y-0 translate-y-8"
            style={{
              background: "#ffffff",
              color: "#01472e",
              borderRadius: "9999px",
              padding: "12px 28px",
              transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
            <span className="uppercase font-bold text-[10px] tracking-[0.3em]">
              {isSaved ? "SPARAD" : "SPARA"}
            </span>
          </button>
        </div>
      </div>

      {/* Expanded card details — visible when clicked */}
      {expanded && (
        <div
          className="mt-4 p-6 md:p-8"
          style={{
            borderRadius: "2.5rem",
            background: "rgba(254,250,224,0.8)",
            border: "1px solid rgba(163,177,138,0.3)",
            animation: "reveal-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ingredients columns */}
            <div className="space-y-5">
              <div>
                <p
                  className="uppercase font-bold text-[9px] tracking-[0.2em] mb-3"
                  style={{ color: "rgba(1,71,46,0.4)" }}
                >
                  HAR HEMMA
                </p>
                <ul className="space-y-1.5">
                  {recipe.ingredientsYouHave.map((item, i) => (
                    <li key={i} className="text-sm flex items-center gap-2" style={{ color: "rgba(1,71,46,0.7)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(1,71,46,0.4)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="uppercase font-bold text-[9px] tracking-[0.2em] mb-3"
                  style={{ color: "rgba(185,28,28,0.6)" }}
                >
                  SAKNAS
                </p>
                <ul className="space-y-1.5">
                  {recipe.missingIngredients.map((item, i) => (
                    <li key={i} className="text-sm flex items-center gap-2" style={{ color: "rgba(185,28,28,0.6)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "rgba(185,28,28,0.4)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* All ingredients */}
            <div>
              <p
                className="uppercase font-bold text-[9px] tracking-[0.2em] mb-3"
                style={{ color: "rgba(1,71,46,0.4)" }}
              >
                ALLA INGREDIENSER
              </p>
              <ul className="space-y-1.5">
                {recipe.fullIngredientsList.map((item, i) => (
                  <li key={i} className="text-sm flex items-center gap-2" style={{ color: "rgba(1,71,46,0.6)" }}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#a3b18a" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="space-y-5">
              <div>
                <p
                  className="uppercase font-bold text-[9px] tracking-[0.2em] mb-3"
                  style={{ color: "rgba(1,71,46,0.4)" }}
                >
                  INSTRUKTIONER
                </p>
                <ol className="space-y-2">
                  {recipe.instructions.map((step, i) => (
                    <li key={i} className="text-sm flex gap-3" style={{ color: "rgba(1,71,46,0.6)" }}>
                      <span
                        className="uppercase font-bold text-[10px] tracking-[0.05em] flex-shrink-0 w-5"
                        style={{ color: "rgba(1,71,46,0.25)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div
                className="p-4"
                style={{
                  borderRadius: "1.25rem",
                  background: "rgba(204,213,174,0.4)",
                }}
              >
                <p
                  className="uppercase font-bold text-[9px] tracking-[0.2em] mb-2"
                  style={{ color: "rgba(1,71,46,0.4)" }}
                >
                  TID
                </p>
                <p className="text-sm" style={{ color: "rgba(1,71,46,0.7)" }}>
                  <span className="font-bold">Förb:</span> {recipe.estimatedTime.preparationTime}
                </p>
                <p className="text-sm" style={{ color: "rgba(1,71,46,0.7)" }}>
                  <span className="font-bold">Tillg:</span> {recipe.estimatedTime.cookingTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
