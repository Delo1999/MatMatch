"use client";
import { useState } from "react";
import { Trash2, Star, Clock, ChefHat } from "lucide-react";
import { ApiRecipe } from "@/types/recipe";

type RecipeCardReceptComponentProps = {
  recipe: ApiRecipe & { savedRecipeId: string };
  isFavorited: boolean;
  onToggleFavorite: (savedRecipeId: string) => void;
  onDelete: (recipe: ApiRecipe) => void;
};

export function RecipeCardReceptComponent({
  recipe,
  isFavorited,
  onToggleFavorite,
  onDelete,
}: RecipeCardReceptComponentProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Card with aspect-ratio 4/3 */}
      <div
        className="relative overflow-hidden cursor-pointer group"
        style={{
          aspectRatio: "4/3",
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
              className="uppercase font-bold text-xs tracking-[0.2em]"
              style={{ color: "rgba(1,71,46,0.7)" }}
            >
              RECEPT
            </p>
            <ChefHat className="w-7 h-7" style={{ color: "rgba(1,71,46,0.5)" }} />
          </div>

          {/* Center: recipe name */}
          <div className="flex-1 flex items-center justify-center">
            <h3
              className="leading-[0.9] tracking-[-0.03em] text-center"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)",
                fontWeight: "400",
                color: "#01472e",
              }}
            >
              {recipe.recipeName.toUpperCase()}
            </h3>
          </div>

          {/* Bottom: time + ingredient count */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" style={{ color: "rgba(1,71,46,0.7)" }} />
              <span
                className="uppercase font-bold text-xs tracking-[0.15em]"
                style={{ color: "rgba(1,71,46,0.8)" }}
              >
                {recipe.estimatedTime.cookingTime}
              </span>
            </div>
            <span
              className="uppercase font-bold text-xs tracking-[0.15em]"
              style={{ color: "rgba(1,71,46,0.7)" }}
            >
              {recipe.fullIngredientsList.length} INGREDIENSER
            </span>
          </div>
        </div>

        {/* Hover overlay with glass effect and action buttons */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: "rgba(1,71,46,0.15)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1)",
            borderRadius: "2.5rem",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
          }}
        >
          <div className="flex flex-col items-center gap-3 pointer-events-auto">
            <h3
              className="leading-[0.85] tracking-[-0.02em]"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                color: "#01472e",
                textShadow: "0 2px 12px rgba(255,255,255,0.6)",
              }}
            >
              {expanded ? "DÖLJ RECEPT" : "VISA RECEPT"}
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(recipe.savedRecipeId);
                }}
                className="flex items-center gap-2"
                style={{
                  background: isFavorited ? "#f59e0b" : "#ffffff",
                  color: isFavorited ? "#ffffff" : "#01472e",
                  borderRadius: "9999px",
                  padding: "10px 22px",
                  transition: "background 0.3s ease",
                }}
              >
                <Star className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
                <span className="uppercase font-bold text-xs tracking-[0.2em]">
                  {isFavorited ? "FAVORIT" : "FAVORIT"}
                </span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(recipe);
                }}
                className="flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  color: "#b91c1c",
                  borderRadius: "9999px",
                  padding: "10px 22px",
                }}
              >
                <Trash2 className="w-4 h-4" />
                <span className="uppercase font-bold text-xs tracking-[0.2em]">
                  TA BORT
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded card details */}
      {expanded && (
        <div
          className="mt-4 p-6 md:p-8 overflow-y-auto md:no-scrollbar"
          style={{
            borderRadius: "2.5rem",
            background: "rgba(254,250,224,0.8)",
            border: "1px solid rgba(163,177,138,0.3)",
            animation: "reveal-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
            height: "560px",
          }}
        >
          <div className="space-y-6">
            {/* Top row: Har Hemma + Alla Ingredienser */}
            <div className="grid grid-cols-2 gap-6">
              {/* Har Hemma */}
              <div>
                <p
                  className="uppercase font-bold text-xs tracking-[0.2em] mb-3"
                  style={{ color: "rgba(1,71,46,0.7)" }}
                >
                  HAR HEMMA
                </p>
                <ul className="space-y-1.5">
                  {recipe.ingredientsYouHave.map((item, i) => (
                    <li key={i} className="text-sm font-medium flex items-center gap-2" style={{ color: "rgba(1,71,46,0.85)" }}>
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "rgba(1,71,46,0.6)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alla Ingredienser */}
              <div>
                <p
                  className="uppercase font-bold text-xs tracking-[0.2em] mb-3"
                  style={{ color: "rgba(1,71,46,0.7)" }}
                >
                  ALLA INGREDIENSER
                </p>
                <ul className="space-y-1.5">
                  {recipe.fullIngredientsList.map((item, i) => (
                    <li key={i} className="text-sm font-medium flex items-center gap-2" style={{ color: "rgba(1,71,46,0.85)" }}>
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#a3b18a" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid rgba(163,177,138,0.4)" }} />

            {/* Bottom: Instructions full width */}
            <div>
              <p
                className="uppercase font-bold text-xs tracking-[0.2em] mb-3"
                style={{ color: "rgba(1,71,46,0.7)" }}
              >
                INSTRUKTIONER
              </p>
              <ol className="space-y-2">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="text-sm font-medium flex gap-3" style={{ color: "rgba(1,71,46,0.8)" }}>
                    <span
                      className="uppercase font-bold text-xs tracking-[0.05em] flex-shrink-0 w-5"
                      style={{ color: "rgba(1,71,46,0.5)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
