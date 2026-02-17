"use client";
import { Bookmark } from "lucide-react";
import { ApiRecipe } from "@/types/recipe";
import { RecipeCardHomeComponent } from "./recipe-card-home-component";
import { useAuth } from "@/contexts/auth-context";
import { useEffect, useRef, useState } from "react";

type RecipeListHomeComponentProps = {
  recipes: ApiRecipe[];
  savedRecipes: (ApiRecipe & { savedRecipeId: string })[];
  onSave: (recipe: ApiRecipe) => void;
  onRemove: (recipe: ApiRecipe) => void;
};

export function RecipeListHomeComponent({
  recipes,
  savedRecipes,
  onSave,
  onRemove,
}: RecipeListHomeComponentProps) {
  const { user } = useAuth();
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  if (recipes.length === 0) return null;

  return (
    <div ref={gridRef} className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
      {/* Section subtitle */}
      <div
        className={`flex items-center gap-3 mb-10 ${
          isVisible ? "animate-reveal" : "opacity-0"
        }`}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: "#01472e" }} />
        {user ? (
          <p className="text-sm" style={{ color: "rgba(1,71,46,0.5)" }}>
            Dina recept — sparmarkera{" "}
            <Bookmark className="w-3 h-3 inline" style={{ color: "#01472e" }} />{" "}
            för kokboken
          </p>
        ) : (
          <p className="text-sm" style={{ color: "rgba(1,71,46,0.5)" }}>
            Dina recept — logga in för att spara{" "}
            <Bookmark className="w-3 h-3 inline" style={{ color: "#01472e" }} />
          </p>
        )}
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {recipes.map((recipe, index) => {
          const isSaved = savedRecipes.some(
            (sr) => sr.recipeName === recipe.recipeName
          );

          return (
            <div
              key={index}
              className={isVisible ? "animate-reveal" : "opacity-0"}
              style={{
                animationDelay: isVisible ? `${0.1 * (index + 1)}s` : undefined,
              }}
            >
              <RecipeCardHomeComponent
                recipe={recipe}
                isSaved={isSaved}
                onSave={onSave}
                onRemove={onRemove}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
