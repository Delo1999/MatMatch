"use client";
import { useState } from "react";
import { ApiRecipe } from "@/types/recipe";
import {
  HeroSectionHomeComponent,
  IngredientsForm,
  ErrorDisplay,
  RecipeListHomeComponent,
  Footer,
} from "@/components/_homeComponents/index";
import {
  useSavedRecipes,
  useSaveRecipe,
  useRemoveRecipe,
} from "@/hooks/useRecipes";
import { useIngredientsSearch } from "@/hooks/useIngredientsSearch";

export default function HomePage() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState<ApiRecipe[]>([]);

  const { data: savedRecipes = [] } = useSavedRecipes();
  const saveRecipeMutation = useSaveRecipe();
  const removeRecipeMutation = useRemoveRecipe();
  const ingredientsSearchMutation = useIngredientsSearch();

  const saveRecipe = async (recipe: ApiRecipe) => {
    try {
      const result = await saveRecipeMutation.mutateAsync(recipe);
      return result.id; // ID for potential favoriting
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  const removeRecipe = async (recipeToRemove: ApiRecipe) => {
    try {
      await removeRecipeMutation.mutateAsync(recipeToRemove);
    } catch (error) {
      console.error("Error removing recipe:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecipes([]);

    try {
      const ingredientsArray = ingredients.split(",").map((i) => i.trim());
      const data = await ingredientsSearchMutation.mutateAsync(
        ingredientsArray
      );
      setRecipes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <HeroSectionHomeComponent />

      <IngredientsForm
        ingredients={ingredients}
        setIngredients={setIngredients}
        loading={ingredientsSearchMutation.isPending}
        onSubmit={handleSubmit}
      />

      {ingredientsSearchMutation.error && (
        <ErrorDisplay error={ingredientsSearchMutation.error.message} />
      )}

      <RecipeListHomeComponent
        recipes={recipes}
        savedRecipes={savedRecipes}
        onSave={saveRecipe}
        onRemove={removeRecipe}
      />

      <Footer />
    </main>
  );
}
