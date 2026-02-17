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
import { toast } from "sonner";
import { Footer } from "@/app/_components/footer";

export default function ReceptPage() {
  const { data: savedRecipes = [] } = useSavedRecipesForRecept();
  const { data: favoriteRecipes = [] } = useFavoriteRecipes();

  const addToFavoritesMutation = useAddToFavorites();
  const removeFromFavoritesMutation = useRemoveFromFavorites();
  const removeRecipeMutation = useRemoveRecipeForRecept();

  const addToFavorites = async (savedRecipeId: string) => {
    try {
      await addToFavoritesMutation.mutateAsync(savedRecipeId);
      toast.success("Tillagt i favoriter", {
        description: "Receptet har markerats som favorit.",
      });
    } catch (error) {
      console.error("Error adding to favorites:", error);
      const errorMessage = error instanceof Error ? error.message : "Kunde inte lägga till i favoriter";
      toast.error("Misslyckades att lägga till i favoriter", {
        description: errorMessage,
      });
    }
  };

  const removeFromFavorites = async (savedRecipeId: string) => {
    try {
      await removeFromFavoritesMutation.mutateAsync(savedRecipeId);
      toast.success("Borttaget från favoriter", {
        description: "Receptet har tagits bort från favoriter.",
      });
    } catch (error) {
      console.error("Error removing from favorites:", error);
      const errorMessage = error instanceof Error ? error.message : "Kunde inte ta bort från favoriter";
      toast.error("Misslyckades att ta bort från favoriter", {
        description: errorMessage,
      });
    }
  };

  const removeRecipe = async (recipeToRemove: ApiRecipe) => {
    try {
      await removeRecipeMutation.mutateAsync(recipeToRemove);
      toast.success("Receptet har tagits bort", {
        description: `${recipeToRemove.recipeName} har tagits bort från din kokbok.`,
      });
    } catch (error) {
      console.error("Error removing recipe:", error);
      const errorMessage = error instanceof Error ? error.message : "Kunde inte ta bort receptet";
      toast.error("Misslyckades att ta bort recept", {
        description: errorMessage,
      });
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
    <main className="bg-cream">
      <HeroSectionReceptComponent />

      <RecipeListReceptComponent
        savedRecipes={savedRecipes}
        favoriteRecipes={favoriteRecipes}
        onToggleFavorite={handleToggleFavorite}
        onDelete={removeRecipe}
      />

      <Footer />
    </main>
  );
}
