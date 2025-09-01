import { useMutation } from "@tanstack/react-query";
import { ApiRecipe } from "@/types/recipe";

export const useIngredientsSearch = () => {
  return useMutation({
    mutationFn: async (ingredients: string[]) => {
      const response = await fetch("/api/ingredients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      if (!response.ok) {
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        } else {
          throw new Error(
            "Tyvärr, det uppstod ett fel när receptet genererades."
          );
        }
      }

      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error(
          "Tyvärr kunde jag inte hitta några recept för dessa ingredienser. Försök med fler eller mer specifika ingredienser."
        );
      }

      return data as ApiRecipe[];
    },
  });
};
