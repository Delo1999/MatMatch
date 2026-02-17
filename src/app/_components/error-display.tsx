type ErrorDisplayProps = {
  error: string;
};

export function ErrorDisplay({ error }: ErrorDisplayProps) {
  return (
    <div className="max-w-7xl mx-auto pb-8">
      <div
        className="p-6 md:p-8"
        style={{
          borderRadius: "2.5rem",
          background: "rgba(254,242,242,0.8)",
          border: "1px solid rgba(185,28,28,0.15)",
          boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(185,28,28,0.1)" }}
          >
            <span className="text-base" style={{ color: "rgba(185,28,28,0.6)" }}>!</span>
          </div>
          <div className="flex-1">
            <p
              className="uppercase font-bold text-[10px] tracking-[0.2em] mb-2"
              style={{ color: "rgba(185,28,28,0.6)" }}
            >
              INGA RECEPT HITTADES
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(185,28,28,0.7)" }}>
              {error}
            </p>
            <div className="p-4" style={{ borderRadius: "1.25rem", background: "rgba(254,250,224,0.6)" }}>
              <p
                className="uppercase font-bold text-[9px] tracking-[0.2em] mb-2"
                style={{ color: "rgba(1,71,46,0.4)" }}
              >
                TIPS FÖR BÄTTRE RESULTAT
              </p>
              <ul className="text-sm space-y-1.5" style={{ color: "rgba(1,71,46,0.5)" }}>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(1,71,46,0.3)" }} />
                  Använd specifika ingredienser (t.ex. kycklingfilé istället för kött)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(1,71,46,0.3)" }} />
                  Lägg till fler ingredienser för mer variation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(1,71,46,0.3)" }} />
                  Undvik oanvändbara eller oätliga saker
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
