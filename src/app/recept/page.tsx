"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ApiRecipe } from "@/types/recipe";
import { Bookmark, Trash2, Star } from "lucide-react";

export default function ReceptPage() {
  const [savedRecipes, setSavedRecipes] = useState<ApiRecipe[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<ApiRecipe[]>([]);

  // Load saved recipes from database on component mount
  useEffect(() => {
    fetchSavedRecipes();
    fetchFavoriteRecipes();
  }, []);

  const fetchSavedRecipes = async () => {
    try {
      const response = await fetch("/api/saved-recipes");
      if (response.ok) {
        const recipes = await response.json();
        setSavedRecipes(recipes);
      }
    } catch (error) {
      console.error("Error fetching saved recipes:", error);
    }
  };

  const fetchFavoriteRecipes = async () => {
    try {
      const response = await fetch("/api/favorite-recipes");
      if (response.ok) {
        const recipes = await response.json();
        setFavoriteRecipes(recipes);
      }
    } catch (error) {
      console.error("Error fetching favorite recipes:", error);
    }
  };

  // Add recipe to favorites
  const addToFavorites = async (recipe: ApiRecipe) => {
    try {
      const response = await fetch("/api/favorite-recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });

      if (response.ok) {
        setFavoriteRecipes([...favoriteRecipes, recipe]);
      } else {
        const error = await response.json();
        console.error("Error adding to favorites:", error.error);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  // Remove recipe from favorites
  const removeFromFavorites = async (recipeToRemove: ApiRecipe) => {
    try {
      const response = await fetch(
        `/api/favorite-recipes/${encodeURIComponent(
          recipeToRemove.recipeName
        )}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedFavorites = favoriteRecipes.filter(
          (recipe) => recipe.recipeName !== recipeToRemove.recipeName
        );
        setFavoriteRecipes(updatedFavorites);
      } else {
        const error = await response.json();
        console.error("Error removing from favorites:", error.error);
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  // Check if recipe is favorited
  const isRecipeFavorited = (recipe: ApiRecipe) => {
    return favoriteRecipes.some(
      (favoriteRecipe) => favoriteRecipe.recipeName === recipe.recipeName
    );
  };

  // Remove recipe from database
  const removeRecipe = async (recipeToRemove: ApiRecipe) => {
    try {
      const response = await fetch(
        `/api/saved-recipes/${encodeURIComponent(recipeToRemove.recipeName)}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedSaved = savedRecipes.filter(
          (recipe) => recipe.recipeName !== recipeToRemove.recipeName
        );
        setSavedRecipes(updatedSaved);
      } else {
        const error = await response.json();
        console.error("Error removing recipe:", error.error);
      }
    } catch (error) {
      console.error("Error removing recipe:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      {/* Hero Section */}
      <section className="relative h-110 md:h-[500px] bg-gradient-to-br from-green-600 via-emerald-700 to-green-800">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg- bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 text-center h-full flex flex-col justify-center">
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 md:mb-6">
              <span className="text-5xl pb-3">📖</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 pb-6 drop-shadow-lg leading-tight">
            Mina
            <br />
            <span className="text-emerald-200">recept</span>
          </h1>
          <h2 className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md leading-relaxed">
            Här hittar du alla dina sparade recept och favoritmaträtter.
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <span>⭐</span>
            <span>Favoriter</span>
            <span>•</span>
            <span>📝</span>
            <span>Egna recept</span>
            <span>•</span>
            <span>🔖</span>
            <span>Sparade</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm border-green-100">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-gray-800 pt-5">
              Dina recept
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Hantera och organisera dina favoritrecept
            </p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            {savedRecipes.length === 0 ? (
              <div className="text-center text-gray-500 py-12">
                <span className="text-6xl mb-4 block">📚</span>
                <p className="text-lg mb-2">Inga recept sparade än</p>
                <p className="text-sm">
                  Börja spara recept från huvudsidan för att se dem här!
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {savedRecipes.map((recipe, index) => (
                  <div
                    key={index}
                    className="border-b border-green-200 pb-6 last:border-b-0"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-2xl font-bold text-gray-800 whitespace-normal md:whitespace-nowrap">
                            {recipe.recipeName}
                          </h2>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                isRecipeFavorited(recipe)
                                  ? removeFromFavorites(recipe)
                                  : addToFavorites(recipe)
                              }
                              className="text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center"
                            >
                              {isRecipeFavorited(recipe) ? (
                                <Star className="w-6 h-6 fill-current" />
                              ) : (
                                <Star className="w-6 h-6" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeRecipe(recipe)}
                              className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center"
                            >
                              <Trash2 className="w-6 h-6" />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-700 mb-2 pt-4">
                            Ingredienser du har:
                          </h3>
                          <ul className="list-disc list-inside text-sm text-green-600 font-medium">
                            {recipe.ingredientsYouHave.map((ingredient, i) => (
                              <li key={i}>{ingredient}</li>
                            ))}
                          </ul>

                          <h3 className="font-semibold text-gray-700 mb-2 mt-4">
                            Saknade ingredienser:
                          </h3>
                          <ul className="list-disc list-inside text-sm text-red-600 font-medium">
                            {recipe.missingIngredients.map((ingredient, i) => (
                              <li key={i}>{ingredient}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="lg:mt-16.5">
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
                        <div className="lg:mt-16.5">
                          <h3 className="font-semibold text-gray-700 mb-2">
                            Instruktioner:
                          </h3>
                          <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                            {recipe.instructions.map((instruction, i) => (
                              <li key={i}>{instruction}</li>
                            ))}
                          </ol>
                        </div>

                        <div className="mt-6">
                          <h3 className="font-semibold text-gray-700 mb-2">
                            Tid🕓:
                          </h3>
                          <div className="bg-green-100 rounded-lg p-3">
                            <p className="text-sm text-gray-700">
                              <span className="font-medium">Förberedelse:</span>{" "}
                              {recipe.estimatedTime.preparationTime}
                              <br />
                              <span className="font-medium">
                                Tillagning:
                              </span>{" "}
                              {recipe.estimatedTime.cookingTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
