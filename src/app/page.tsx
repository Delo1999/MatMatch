"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ApiRecipe } from "@/types/recipe";

export default function HomePage() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState<ApiRecipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data: ApiRecipe[] = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Tyvärr, det uppstod ett fel när receptet genererades.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-br from-orange-600 via-red-600 to-orange-700">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 text-center h-full flex flex-col justify-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-5xl">👨‍🍳</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Ingredienser in
            <br />
            <span className="text-yellow-200">recept ut!</span>
          </h1>
          <h2 className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md leading-relaxed">
            Tomt i huvudet men fullt i kylen? MatMatch hjälper dig trolla fram
            recept på det du redan har hemma.
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <span>⚡</span>
            <span>Snabb & enkel</span>
            <span>•</span>
            <span>🎯</span>
            <span>Personliga recept</span>
            <span>•</span>
            <span>🌱</span>
            <span>Minimalt slöseri</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-16 max-w-2xl">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
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
                    className="w-full h-16 p-4 pr-12 border-2 border-gray-200 rounded-xl text-lg shadow-sm focus:ring-4 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="t.ex. potatis, mjöl, mjölk, ägg"
                    disabled={loading}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></div>
                </div>
                <p className="text-xs text-gray-500">
                  Separera ingredienser med kommatecken
                </p>
              </div>

              <Button
                className="h-16 w-full text-lg font-semibold shadow-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transition-all duration-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">⚠️</span>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Recipe Display */}
            {recipes.length > 0 && (
              <div className="mt-8">
                <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
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
                    <div className="space-y-6">
                      {recipes.map((recipe, index) => (
                        <div
                          key={index}
                          className="border-b border-orange-200 pb-6 last:border-b-0"
                        >
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            {recipe.recipename}
                          </h2>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-semibold text-gray-700 mb-2">
                                Ingredienser du har:
                              </h3>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {recipe.ingredientsYouHave.map(
                                  (ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                  )
                                )}
                              </ul>

                              <h3 className="font-semibold text-gray-700 mb-2 mt-4">
                                Saknade ingredienser:
                              </h3>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {recipe.missingIngredients.map(
                                  (ingredient, i) => (
                                    <li key={i}>{ingredient}</li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div>
                              <h3 className="font-semibold text-gray-700 mb-2">
                                Tid:
                              </h3>
                              <p className="text-sm text-gray-600">
                                Förberedelse:{" "}
                                {recipe.estimatedTime.preparationTime}
                                <br />
                                Tillagning: {recipe.estimatedTime.cookingTime}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4">
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

                          <div className="mt-4">
                            <h3 className="font-semibold text-gray-700 mb-2">
                              Instruktioner:
                            </h3>
                            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                              {recipe.instructions.map((instruction, i) => (
                                <li key={i}>{instruction}</li>
                              ))}
                            </ol>
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
          <p>
            MatMatch - Din personliga kock som hjälper dig använda det du har
          </p>
        </div>
      </footer>
    </main>
  );
}
