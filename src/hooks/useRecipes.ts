import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiRecipe } from "@/types/recipe";

export const useSavedRecipes = () => {
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

export const useSaveRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (recipe: ApiRecipe) => {
      const response = await fetch("/api/saved-recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });

      if (!response.ok) {
        throw new Error("Failed to save recipe");
      }

      return response.json();
    },
    onSuccess: (result, recipe) => {
      queryClient.setQueryData(
        ["savedRecipes"],
        (old: (ApiRecipe & { savedRecipeId: string })[] | undefined) => {
          if (!old) return [{ ...recipe, savedRecipeId: result.id }];
          return [...old, { ...recipe, savedRecipeId: result.id }];
        }
      );
    },
  });
};

export const useRemoveRecipe = () => {
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
    },
  });
};
