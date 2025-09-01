import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";

type IngredientsFormProps = {
  ingredients: string;
  setIngredients: (value: string) => void;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
};

export function IngredientsForm({
  ingredients,
  setIngredients,
  loading,
  onSubmit,
}: IngredientsFormProps) {
  const { user } = useAuth();

  return (
    <section className="container mx-auto px-4 py-10 max-w-5xl">
      <Card className="shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800 pt-5">
            Vad har du hemma?
          </CardTitle>
          <p className="text-gray-600 mt-2 mb-4">
            Skriv dina ingredienser så hjälper vi dig hitta perfekta recept
          </p>
          {!user && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-medium text-md md:text-lg text-green-800 ">
                  Din personliga kokbok väntar!
                </h4>
              </div>
              <p className="text-sm md:text-md text-green-700 text-start">
                Logga in för att få skräddarsydda recept baserat på dina
                allergier och kostpreferenser – och sparmarkera alla dina
                favoriter till din egna personliga kokbok!
              </p>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <form onSubmit={onSubmit} className="space-y-6">
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
        </CardContent>
      </Card>
    </section>
  );
}
