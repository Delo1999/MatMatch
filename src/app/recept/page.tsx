"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReceptPage() {
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
            <div className="text-center text-gray-500 py-12">
              <span className="text-6xl mb-4 block">📚</span>
              <p className="text-lg mb-2">Inga recept sparade än</p>
              <p className="text-sm">
                Börja spara recept från huvudsidan för att se dem här!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
