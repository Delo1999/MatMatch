import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { ApiRecipe } from "@/types/recipe";

type RecipeCardHomeComponentProps = {
  recipe: ApiRecipe;
  isSaved: boolean;
  onSave: (recipe: ApiRecipe) => void;
  onRemove: (recipe: ApiRecipe) => void;
};

export function RecipeCardHomeComponent({
  recipe,
  isSaved,
  onSave,
  onRemove,
}: RecipeCardHomeComponentProps) {
  return (
    <div className="border-b border-green-200 pb-6 last:border-b-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          {recipe.recipeName}
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => (isSaved ? onRemove(recipe) : onSave(recipe))}
          className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center flex-shrink-0"
        >
          {isSaved ? (
            <Bookmark className="w-6 h-6 md:w-8 md:h-8 fill-current" />
          ) : (
            <Bookmark className="w-6 h-6 md:w-8 md:h-8" />
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-700 text-base md:text-lg">
            Ingredienser du har:
          </h3>
          <ul className="list-disc list-inside text-sm md:text-base text-green-600 font-medium space-y-1">
            {recipe.ingredientsYouHave.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>

          <h3 className="font-semibold text-gray-700 text-base md:text-lg">
            Saknade ingredienser:
          </h3>
          <ul className="list-disc list-inside text-sm md:text-base text-red-600 font-medium space-y-1">
            {recipe.missingIngredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-gray-700 text-base md:text-lg">
            Alla ingredienser:
          </h3>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-600 space-y-1">
            {recipe.fullIngredientsList.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 text-base md:text-lg">
              Instruktioner:
            </h3>
            <ol className="list-decimal list-inside text-sm md:text-base text-gray-600 space-y-1">
              {recipe.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 text-base md:text-lg">
              Tid:
            </h3>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-sm md:text-base text-gray-700">
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
