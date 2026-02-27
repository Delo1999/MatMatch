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
    <div className="relative">
      {/* Card with aspect-ratio 4/5 */}
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

        {/* Hover overlay with glass effect and centered text */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: "rgba(1,71,46,0.15)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1)",
            borderRadius: "2.5rem",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
          }}
        >
          <div className="flex flex-col items-center gap-2">
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
            <div 
              style={{
                fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
                color: "rgba(255,255,255,0.9)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontWeight: "600",
                textShadow: "0 1px 4px rgba(0,0,0,0.3)",
              }}
            >
              {expanded ? "Klicka för att stänga" : "Klicka för att öppna"}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded card details — visible when clicked */}
      {expanded && (
        <div
          className="mt-4 p-6 md:p-8 overflow-y-auto md:no-scrollbar"
          style={{
            borderRadius: "2.5rem",
            background: "rgba(254,250,224,0.8)",
            border: "1px solid rgba(163,177,138,0.3)",
            animation: "reveal-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
            maxHeight: "560px",
          }}
        >
          {/* Save button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                isSaved ? onRemove(recipe) : onSave(recipe);
              }}
              className="flex items-center gap-3 px-6 py-3 transition-all hover:scale-105"
              style={{
                borderRadius: "1.25rem",
                background: isSaved ? "rgba(1,71,46,0.15)" : "rgba(204,213,174,0.6)",
                border: `2px solid ${isSaved ? "rgba(1,71,46,0.3)" : "rgba(1,71,46,0.2)"}`,
                transition: "all 0.3s ease",
              }}
            >
              <Bookmark 
                className={`w-6 h-6 ${isSaved ? "fill-current" : ""}`}
                style={{ color: "#01472e" }}
              />
              <span 
                className="uppercase font-bold text-sm tracking-[0.2em]"
                style={{ color: "#01472e" }}
              >
                {isSaved ? "SPARAD" : "SPARA RECEPT"}
              </span>
            </button>
          </div>

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
