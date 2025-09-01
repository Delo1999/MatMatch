export function HeroSectionReceptComponent() {
  return (
    <section className="relative h-110 md:h-[500px] bg-gradient-to-br from-green-600 via-emerald-700 to-green-800">
      <div className="absolute inset-0 bg- bg-opacity-30"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center h-full flex flex-col justify-center">
        <div>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 md:mb-6">
            <span className="text-5xl pb-3">📖</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 pb-6 drop-shadow-lg leading-tight">
          Min
          <br />
          <span className="text-emerald-200">kokbok</span>
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
  );
}
