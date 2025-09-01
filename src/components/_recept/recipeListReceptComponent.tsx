import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiRecipe } from "@/types/recipe";
import { RecipeCardReceptComponent } from ".";
import { EmptyState } from "./emptyState";

interface RecipeListReceptComponentProps {
  savedRecipes: (ApiRecipe & { savedRecipeId: string })[];
  favoriteRecipes: { savedRecipeId: string }[];
  onToggleFavorite: (savedRecipeId: string) => void;
  onDelete: (recipe: ApiRecipe) => void;
}

export function RecipeListReceptComponent({
  savedRecipes,
  favoriteRecipes,
  onToggleFavorite,
  onDelete,
}: RecipeListReceptComponentProps) {
  const isRecipeFavorited = (savedRecipeId: string) => {
    return favoriteRecipes.some(
      (favoriteRecipe) => favoriteRecipe.savedRecipeId === savedRecipeId
    );
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-5xl">
      <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm border-green-100">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-xl font-bold text-gray-800 pt-5">
            Din kokbok
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Här är dina sparade recept. Du kan stjärmarkera dem som favoriter
            eller ta bort dem.
          </p>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          {savedRecipes.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-8">
              {savedRecipes.map((recipe, index) => (
                <RecipeCardReceptComponent
                  key={index}
                  recipe={recipe}
                  isFavorited={isRecipeFavorited(recipe.savedRecipeId)}
                  onToggleFavorite={onToggleFavorite}
                  onDelete={onDelete}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
