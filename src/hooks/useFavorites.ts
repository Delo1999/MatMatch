import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiRecipe } from "@/types/recipe";

export const useSavedRecipesForRecept = () => {
  return useQuery({
    queryKey: ["savedRecipes"],
    queryFn: async (): Promise<(ApiRecipe & { savedRecipeId: string })[]> => {
      const response = await fetch("/api/saved-recipes");
      if (!response.ok) {
        throw new Error("Failed to fetch saved recipes");
      }
      return response.json();
    },
  });
};

export const useFavoriteRecipes = () => {
  return useQuery({
    queryKey: ["favoriteRecipes"],
    queryFn: async (): Promise<{ savedRecipeId: string }[]> => {
      const response = await fetch("/api/favorite-recipes");
      if (!response.ok) {
        throw new Error("Failed to fetch favorite recipes");
      }
      return response.json();
    },
  });
};

export const useAddToFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (savedRecipeId: string) => {
      const response = await fetch("/api/favorite-recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ savedRecipeId }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to add to favorites");
      }

      return response.json();
    },
    onSuccess: (_, savedRecipeId) => {
      queryClient.setQueryData(
        ["favoriteRecipes"],
        (old: { savedRecipeId: string }[] | undefined) => {
          if (!old) return [{ savedRecipeId }];
          return [...old, { savedRecipeId }];
        }
      );
    },
  });
};

export const useRemoveFromFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (savedRecipeId: string) => {
      const response = await fetch(`/api/favorite-recipes/${savedRecipeId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to remove from favorites");
      }

      return response.json();
    },
    onSuccess: (_, savedRecipeId) => {
      queryClient.setQueryData(
        ["favoriteRecipes"],
        (old: { savedRecipeId: string }[] | undefined) => {
          if (!old) return [];
          return old.filter((recipe) => recipe.savedRecipeId !== savedRecipeId);
        }
      );
    },
  });
};

export const useRemoveRecipeForRecept = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (recipeToRemove: ApiRecipe) => {
      const response = await fetch(
        `/api/saved-recipes/${encodeURIComponent(recipeToRemove.recipeName)}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to remove recipe");
      }

      return response.json();
    },
    onSuccess: (_, recipeToRemove) => {
      queryClient.setQueryData(
        ["savedRecipes"],
        (old: (ApiRecipe & { savedRecipeId: string })[] | undefined) => {
          if (!old) return [];
          return old.filter(
            (recipe) => recipe.recipeName !== recipeToRemove.recipeName
          );
        }
      );

      queryClient.setQueryData(
        ["favoriteRecipes"],
        (old: { savedRecipeId: string }[] | undefined) => {
          if (!old) return [];
          return old.filter(
            (recipe) => recipe.savedRecipeId !== recipeToRemove.savedRecipeId
          );
        }
      );
    },
  });
};
