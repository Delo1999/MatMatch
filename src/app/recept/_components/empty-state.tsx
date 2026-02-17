import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EmptyState() {
  return (
    <div className="text-center py-24">
      <div
        className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center"
        style={{ background: "rgba(204,213,174,0.4)" }}
      >
        <span className="text-4xl">📚</span>
      </div>
      <h3
        className="leading-[0.85] tracking-[-0.03em] mb-4"
        style={{
          fontFamily: "var(--font-anton), sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "#01472e",
        }}
      >
        TOMT HÄR
      </h3>
      <p className="text-sm max-w-sm mx-auto mb-8" style={{ color: "rgba(1,71,46,0.5)" }}>
        Börja spara recept från huvudsidan för att se dem här i din kokbok.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full px-8 py-3"
        style={{
          background: "#01472e",
          color: "#ccd5ae",
          transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span className="uppercase font-bold text-[10px] tracking-[0.3em]">
          SÖK RECEPT
        </span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
