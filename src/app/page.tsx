"use client";
import { useState } from "react";
import { ApiRecipe } from "@/types/recipe";
import { ErrorDisplay } from "./_components/error-display";
import { HeroSectionHomeComponent } from "./_components/hero-section-home-component";
import { IngredientsForm } from "./_components/ingredients-form";
import { RecipeListHomeComponent } from "./_components/recipe-list-home-component";
import { Footer } from "./_components/footer";
import {
  useSavedRecipes,
  useSaveRecipe,
  useRemoveRecipe,
} from "./_hooks/use-recipes";
import { useIngredientsSearch } from "@/app/_hooks/use-ingredients-search";
import { toast } from "sonner";
import { useAuth } from "@/contexts/auth-context";

export default function HomePage() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState<ApiRecipe[]>([]);

  const { user } = useAuth();
  const { data: savedRecipes = [] } = useSavedRecipes();
  const saveRecipeMutation = useSaveRecipe();
  const removeRecipeMutation = useRemoveRecipe();
  const ingredientsSearchMutation = useIngredientsSearch();

  const saveRecipe = async (recipe: ApiRecipe) => {
    if (!user) {
      toast.error("Du måste logga in", {
        description: "Logga in för att spara recept i din kokbok.",
      });
      return;
    }

    try {
      const result = await saveRecipeMutation.mutateAsync(recipe);
      toast.success("Receptet har sparats!", {
        description: `${recipe.recipeName} finns nu i din kokbok.`,
      });
      return result.id;
    } catch (error) {
      console.error("Error saving recipe:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Kunde inte spara receptet";
      toast.error("Misslyckades att spara recept", {
        description: errorMessage,
      });
    }
  };

  const removeRecipe = async (recipeToRemove: ApiRecipe) => {
    if (!user) {
      toast.error("Du måste logga in", {
        description: "Logga in för att hantera dina sparade recept.",
      });
      return;
    }

    try {
      await removeRecipeMutation.mutateAsync(recipeToRemove);
      toast.success("Receptet har tagits bort", {
        description: `${recipeToRemove.recipeName} har tagits bort från din kokbok.`,
      });
    } catch (error) {
      console.error("Error removing recipe:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Kunde inte ta bort receptet";
      toast.error("Misslyckades att ta bort recept", {
        description: errorMessage,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecipes([]);

    try {
      const ingredientsArray = ingredients.split(",").map((i) => i.trim());
      const data =
        await ingredientsSearchMutation.mutateAsync(ingredientsArray);
      setRecipes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main>
      {/* Section 1: Hero — full viewport, bg #ccd5ae */}
      <HeroSectionHomeComponent />

      {/* Section 2: Product/Feature Grid — bg #e9edc9, 5rem rounded top */}
      <IngredientsForm
        ingredients={ingredients}
        setIngredients={setIngredients}
        loading={ingredientsSearchMutation.isPending}
        onSubmit={handleSubmit}
      />

      {/* Error display inside the olive section */}
      {ingredientsSearchMutation.error && (
        <div style={{ background: "#e9edc9" }} className="px-6 md:px-12">
          <ErrorDisplay error={ingredientsSearchMutation.error.message} />
        </div>
      )}

      {/* Recipe results grid inside the olive section */}
      {recipes.length > 0 && (
        <div style={{ background: "#e9edc9" }} className="pb-16">
          <RecipeListHomeComponent
            recipes={recipes}
            savedRecipes={savedRecipes}
            onSave={saveRecipe}
            onRemove={removeRecipe}
          />
        </div>
      )}

      {/* Section 3: Footer — bg #01472e, 5rem rounded top */}
      <Footer />
    </main>
  );
}
