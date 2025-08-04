"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilPage() {
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
              <span className="text-5xl pb-1">👤</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 pb-6 md:pb-6 drop-shadow-lg leading-tight">
            Min
            <br />
            <span className="text-emerald-200">profil</span>
          </h1>
          <h2 className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md leading-relaxed">
            Hantera dina inställningar och personliga preferenser.
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <span>⚙️</span>
            <span>Inställningar</span>
            <span>•</span>
            <span>🚫</span>
            <span>Allergier</span>
            <span>•</span>
            <span>❤️</span>
            <span>Preferenser</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm border-green-100 gap-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-gray-800 pt-5">
              Profilinställningar
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Anpassa din MatMatch-upplevelse
            </p>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb- flex items-center justify-center">
                  <span className="text-6xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 pt-2">
                  Välkommen!
                </h3>
                <p className="text-gray-600">Din personliga matassistent</p>
              </div>

              <div className="grid gap-4 justify-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Allergier och kostpreferenser
                  </h4>
                  <p className="text-sm text-gray-600">
                    Ange allergier och kostpreferenser
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
