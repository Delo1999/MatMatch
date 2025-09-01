interface ErrorDisplayProps {
  error: string;
}

export function ErrorDisplay({ error }: ErrorDisplayProps) {
  return (
    <section className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="p-6 bg-gradient-to-br from-red-50 to-green-50 border-2 border-red-200 rounded-xl shadow-2xl bg-white/90 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">⚠️</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-red-800 mb-2 text-lg">
              Inga recept hittades
            </h3>
            <p className="text-red-700 text-base leading-relaxed mb-3">
              {error}
            </p>
            <div className="bg-white/50 rounded-lg p-3">
              <p className="text-sm text-gray-600 font-medium mb-1">
                💡 Tips för bättre resultat:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  • Använd specifika ingredienser (t.ex. kycklingfilé istället
                  för kött)
                </li>
                <li>• Lägg till fler ingredienser för mer variation</li>
                <li>• Undvik oanvändbara eller oätliga saker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
