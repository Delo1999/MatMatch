"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { ApiRecipe } from "@/types/recipe";
import { Bookmark, Star } from "lucide-react";

export default function HomePage() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState<ApiRecipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [savedRecipes, setSavedRecipes] = useState<ApiRecipe[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<ApiRecipe[]>([]);

  // Load saved recipes from database on component mount
  useEffect(() => {
    fetchSavedRecipes();
    fetchFavoriteRecipes();
  }, []);

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

  // Save recipe to database
  const saveRecipe = async (recipe: ApiRecipe) => {
    try {
      const response = await fetch("/api/saved-recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });

      if (response.ok) {
        setSavedRecipes([...savedRecipes, recipe]);
      } else {
        const error = await response.json();
        console.error("Error saving recipe:", error.error);
      }
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
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

  // Check if recipe is saved
  const isRecipeSaved = (recipe: ApiRecipe) => {
    return savedRecipes.some(
      (savedRecipe) => savedRecipe.recipeName === recipe.recipeName
    );
  };

  // Check if recipe is favorited
  const isRecipeFavorited = (recipe: ApiRecipe) => {
    return favoriteRecipes.some(
      (favoriteRecipe) => favoriteRecipe.recipeName === recipe.recipeName
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRecipes([]);
    setError("");

    try {
      const response = await fetch("/api/ingredients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ingredients: ingredients.split(",").map((i) => i.trim()),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Hantera fel från API:n (t.ex. ogiltiga ingredienser)
        if (data.error) {
          setError(data.error);
        } else {
          setError("Tyvärr, det uppstod ett fel när receptet genererades.");
        }
        return;
      }

      // Kontrollera om vi fick recept eller om arrayen är tom
      if (!Array.isArray(data) || data.length === 0) {
        setError(
          "Tyvärr kunde jag inte hitta några recept för dessa ingredienser. Försök med fler eller mer specifika ingredienser."
        );
        return;
      }

      setRecipes(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Tyvärr, det uppstod ett fel när receptet genererades.");
    } finally {
      setLoading(false);
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-0 md:mb-4">
              <span className="text-5xl">👨‍🍳</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Ingredienser in
            <br />
            <span className="text-emerald-200">recept ut!</span>
          </h1>
          <h2 className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md leading-relaxed">
            Tomt i huvudet men fullt i kylen? MatMatch hjälper dig ta fram
            recept på det du redan har hemma.
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <span>🌿</span>
            <span>Hållbart</span>
            <span>•</span>
            <span>🎯</span>
            <span>Personliga recept</span>
            <span>•</span>
            <span>♻️</span>
            <span>Minimalt slöseri</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-16 max-w-2xl">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm border-green-100">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-gray-800 pt-5">
              Vad har du hemma?
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Skriv dina ingredienser så hjälper vi dig hitta perfekta recept
            </p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label
                  htmlFor="ingredients"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Dina ingredienser
                </label>
                <div className="relative">
                  <input
                    id="ingredients"
                    className="w-full h-16 p-4 pr-12 border-2 border-green-200 rounded-xl text-lg shadow-sm focus:ring-4 focus:ring-green-500 focus:border-green-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="t.ex. ägg, mjölk och mjöl"
                    disabled={loading}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></div>
                </div>
                {/*<p className="text-xs text-gray-500">
                  Separera ingredienser med kommatecken
                </p>*/}
              </div>

              <Button
                className="h-16 w-full text-lg font-semibold shadow-lg bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white transition-all duration-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading || !ingredients.trim()}
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Genererar recept...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span>Få recept förslag</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Error Display */}
            {error && (
              <div className="mt-6 p-6 bg-gradient-to-br from-red-50 to-green-50 border-2 border-red-200 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-800 mb-2">
                      Inga recept hittades
                    </h3>
                    <p className="text-red-700 text-sm leading-relaxed mb-3">
                      {error}
                    </p>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 font-medium mb-1">
                        💡 Tips för bättre resultat:
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>
                          • Använd specifika ingredienser (t.ex. kycklingfilé
                          istället för kött)
                        </li>
                        <li>• Lägg till fler ingredienser för mer variation</li>
                        <li>• Undvik oanvändbara eller oätliga saker</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Recipe Display */}
            {recipes.length > 0 && (
              <div className="mt-8">
                <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-3xl">👨‍🍳</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800">
                          Recept förslag
                        </CardTitle>
                        <p className="text-sm text-gray-600">
                          Här är dina personliga recept
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-8">
                      {recipes.map((recipe, index) => (
                        <div
                          key={index}
                          className="border-b border-green-200 pb-0 last:border-b-0 flex"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-start">
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
                                    onClick={() =>
                                      isRecipeSaved(recipe)
                                        ? removeRecipe(recipe)
                                        : saveRecipe(recipe)
                                    }
                                    className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center"
                                  >
                                    {isRecipeSaved(recipe) ? (
                                      <Bookmark className="w-6 h-6 fill-current" />
                                    ) : (
                                      <Bookmark className="w-6 h-6" />
                                    )}
                                  </Button>
                                </div>
                              </div>

                              <div>
                                <h3 className="font-semibold text-gray-700 mb-2 pt-4">
                                  Ingredienser du har:
                                </h3>
                                <ul className="list-disc list-inside text-sm text-green-600 font-medium">
                                  {recipe.ingredientsYouHave.map(
                                    (ingredient, i) => (
                                      <li key={i}>{ingredient}</li>
                                    )
                                  )}
                                </ul>

                                <h3 className="font-semibold text-gray-700 mb-2 mt-4">
                                  Saknade ingredienser:
                                </h3>
                                <ul className="list-disc list-inside text-sm text-red-600 font-medium">
                                  {recipe.missingIngredients.map(
                                    (ingredient, i) => (
                                      <li key={i}>{ingredient}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>

                            <div className="lg:mt-16.5">
                              <h3 className="font-semibold text-gray-700 mb-2">
                                Alla ingredienser:
                              </h3>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {recipe.fullIngredientsList.map(
                                  (ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                  )
                                )}
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
                                    <span className="font-medium">
                                      Förberedelse:
                                    </span>{" "}
                                    {recipe.estimatedTime.preparationTime}
                                    <br />
                                    <span className="font-medium">
                                      Tillagning:
                                    </span>
                                    {recipe.estimatedTime.cookingTime}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <div className="text-gray-500 text-sm">
          <p>MatMatch - Din hållbara kock som hjälper dig använda det du har</p>
        </div>
      </footer>
    </main>
  );
}
