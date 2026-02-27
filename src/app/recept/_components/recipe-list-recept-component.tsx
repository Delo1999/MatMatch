"use client";
import { ApiRecipe } from "@/types/recipe";
import { RecipeCardReceptComponent } from "./recipe-card-recept-component";
import { EmptyState } from "./empty-state";
import { useEffect, useRef, useState } from "react";

type RecipeListReceptComponentProps = {
  savedRecipes: (ApiRecipe & { savedRecipeId: string })[];
  favoriteRecipes: { savedRecipeId: string }[];
  onToggleFavorite: (savedRecipeId: string) => void;
  onDelete: (recipe: ApiRecipe) => void;
};

export function RecipeListReceptComponent({
  savedRecipes,
  favoriteRecipes,
  onToggleFavorite,
  onDelete,
}: RecipeListReceptComponentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isRecipeFavorited = (savedRecipeId: string) => {
    return favoriteRecipes.some(
      (fav) => fav.savedRecipeId === savedRecipeId
    );
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#e9edc9",
        borderTopLeftRadius: "5rem",
        borderTopRightRadius: "5rem",
      }}
      className="relative -mt-16 pt-24 md:pt-32 pb-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading row: large text + count */}
        <div
          className={`flex flex-col items-center gap-4 mb-16 ${
            isVisible ? "animate-reveal" : "opacity-0"
          }`}
        >
          <h2
            className="leading-[0.9] tracking-[-0.03em] text-center"
            style={{
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              color: "#01472e",
              whiteSpace: "nowrap",
            }}
          >
            DINA RECEPT
          </h2>

          <p
            className="uppercase font-bold text-sm tracking-[0.15em]"
            style={{ color: "rgba(1,71,46,0.6)" }}
          >
            {savedRecipes.length} SPARADE
          </p>
        </div>

        {/* Content */}
        <div className={isVisible ? "animate-reveal-delay-2" : "opacity-0"}>
          {savedRecipes.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {savedRecipes.map((recipe, index) => (
                <div
                  key={index}
                  className={isVisible ? "animate-reveal" : "opacity-0"}
                  style={{
                    animationDelay: isVisible
                      ? `${0.1 * (index + 1) + 0.3}s`
                      : undefined,
                  }}
                >
                  <RecipeCardReceptComponent
                    recipe={recipe}
                    isFavorited={isRecipeFavorited(recipe.savedRecipeId)}
                    onToggleFavorite={onToggleFavorite}
                    onDelete={onDelete}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
