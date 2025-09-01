import { Button } from "@/components/ui/button";
import { Trash2, Star } from "lucide-react";
import { ApiRecipe } from "@/types/recipe";

type RecipeCardReceptComponentProps = {
  recipe: ApiRecipe & { savedRecipeId: string };
  isFavorited: boolean;
  onToggleFavorite: (savedRecipeId: string) => void;
  onDelete: (recipe: ApiRecipe) => void;
};

export function RecipeCardReceptComponent({
  recipe,
  isFavorited,
  onToggleFavorite,
  onDelete,
}: RecipeCardReceptComponentProps) {
  return (
    <div className="border-b border-green-200 pb-6 last:border-b-0">
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 whitespace-normal md:whitespace-nowrap">
            {recipe.recipeName}
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleFavorite(recipe.savedRecipeId)}
              className="text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              {isFavorited ? (
                <Star className="w-6 h-6 fill-current" />
              ) : (
                <Star className="w-6 h-6" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(recipe)}
              className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              <Trash2 className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">
              Alla ingredienser:
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {recipe.fullIngredientsList.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Instruktioner:</h3>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1 mb-6">
              {recipe.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>

            <h3 className="font-semibold text-gray-700 mb-2">Tid🕓:</h3>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Förberedelse:</span>{" "}
                {recipe.estimatedTime.preparationTime}
                <br />
                <span className="font-medium">Tillagning:</span>{" "}
                {recipe.estimatedTime.cookingTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
