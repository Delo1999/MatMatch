import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import { ApiRecipe } from "@/types/recipe";
import { RecipeCardHomeComponent } from ".";
import { useAuth } from "@/contexts/AuthContext";

interface RecipeListHomeComponentProps {
  recipes: ApiRecipe[];
  savedRecipes: (ApiRecipe & { savedRecipeId: string })[];
  onSave: (recipe: ApiRecipe) => void;
  onRemove: (recipe: ApiRecipe) => void;
}

export function RecipeListHomeComponent({
  recipes,
  savedRecipes,
  onSave,
  onRemove,
}: RecipeListHomeComponentProps) {
  const { user } = useAuth();

  if (recipes.length === 0) return null;

  return (
    <section className="container mx-auto px-4 max-w-5xl">
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-2xl border-2">
        <CardHeader className="pb-4 px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl md:text-3xl">👨‍🍳</span>
            </div>
            <div>
              <CardTitle className="text-xl md:text-2xl text-gray-800">
                Recept förslag
              </CardTitle>
              {user ? (
                <p className="text-base md:text-lg text-gray-600">
                  Här är dina personliga recept, sparmarkera{" "}
                  <Bookmark className="w-3 h-3 md:w-4 md:h-4 inline" /> de du
                  vill lägga till i din kokbok
                </p>
              ) : (
                <p className="text-base md:text-lg text-gray-600">
                  Här är dina personliga recept, logga in för att kunna
                  sparmarkera{" "}
                  <Bookmark className="w-3 h-3 md:w-4 md:h-4 inline" /> de du
                  vill lägga till i din kokbok
                </p>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 px-4 md:px-6 pb-6">
          <div className="space-y-6 md:space-y-8">
            {recipes.map((recipe, index) => {
              const isSaved = savedRecipes.some(
                (savedRecipe) => savedRecipe.recipeName === recipe.recipeName
              );

              return (
                <RecipeCardHomeComponent
                  key={index}
                  recipe={recipe}
                  isSaved={isSaved}
                  onSave={onSave}
                  onRemove={onRemove}
                />
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
