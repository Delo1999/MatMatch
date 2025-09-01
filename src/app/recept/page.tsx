"use client";
import { ApiRecipe } from "@/types/recipe";
import { HeroSectionReceptComponent } from "./_components/hero-section-recept-component";
import { RecipeListReceptComponent } from "./_components/recipe-list-recept-component";
import {
  useSavedRecipesForRecept,
  useFavoriteRecipes,
  useAddToFavorites,
  useRemoveFromFavorites,
  useRemoveRecipeForRecept,
} from "@/app/recept/_hooks/use-favorites";

export default function ReceptPage() {
  const { data: savedRecipes = [] } = useSavedRecipesForRecept();
  const { data: favoriteRecipes = [] } = useFavoriteRecipes();

  const addToFavoritesMutation = useAddToFavorites();
  const removeFromFavoritesMutation = useRemoveFromFavorites();
  const removeRecipeMutation = useRemoveRecipeForRecept();

  const addToFavorites = async (savedRecipeId: string) => {
    try {
      await addToFavoritesMutation.mutateAsync(savedRecipeId);
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const removeFromFavorites = async (savedRecipeId: string) => {
    try {
      await removeFromFavoritesMutation.mutateAsync(savedRecipeId);
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  const removeRecipe = async (recipeToRemove: ApiRecipe) => {
    try {
      await removeRecipeMutation.mutateAsync(recipeToRemove);
    } catch (error) {
      console.error("Error removing recipe:", error);
    }
  };

  const handleToggleFavorite = (savedRecipeId: string) => {
    if (favoriteRecipes.some((fav) => fav.savedRecipeId === savedRecipeId)) {
      removeFromFavorites(savedRecipeId);
    } else {
      addToFavorites(savedRecipeId);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <HeroSectionReceptComponent />

      <RecipeListReceptComponent
        savedRecipes={savedRecipes}
        favoriteRecipes={favoriteRecipes}
        onToggleFavorite={handleToggleFavorite}
        onDelete={removeRecipe}
      />
    </main>
  );
}
