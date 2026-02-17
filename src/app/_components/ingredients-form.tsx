"use client";
import { useAuth } from "@/contexts/auth-context";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#e9edc9",
        borderTopLeftRadius: "5rem",
        borderTopRightRadius: "5rem",
      }}
      className="relative -mt-16 pt-24 md:pt-32 pb-24 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Centered heading */}
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-reveal" : "opacity-0"
          }`}
        >
          <h2
            className="leading-[0.9] tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              color: "#01472e",
            }}
          >
            SÖK RECEPT
          </h2>
        </div>

        {/* Search input with button on the right */}
        <form
          onSubmit={onSubmit}
          className={`mb-8 ${
            isVisible ? "animate-reveal-delay-1" : "opacity-0"
          }`}
        >
          <div className="relative">
            <label
              htmlFor="ingredients"
              className="uppercase font-bold text-sm tracking-[0.15em] block mb-3 ml-8"
              style={{ color: "rgba(1,71,46,0.7)" }}
            >
              SKRIV DINA INGREDIENSER
            </label>
            <div className="flex items-center gap-4">
              <input
                id="ingredients"
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="t.ex. ägg, mjölk och mjöl"
                disabled={loading}
                className="flex-1 h-16 md:h-20 px-8 text-lg focus:outline-none focus:ring-0 disabled:opacity-50"
                style={{
                  background: "rgba(254,250,224,0.7)",
                  border: "2px solid rgba(163,177,138,0.3)",
                  borderRadius: "2.5rem",
                  color: "#01472e",
                  transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#01472e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
              />
              {/* Large circular CTA button */}
              <button
                type="button"
                onClick={(e) => {
                  if (ingredients.trim()) {
                    onSubmit(e as unknown as React.FormEvent);
                  }
                }}
                disabled={loading || !ingredients.trim()}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: "#01472e",
                  color: "#ccd5ae",
                  boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
                  transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-sage border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 mb-1" />
                  
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Logged-out prompt */}
        {!user && (
          <div
            className={`mb-0 md:p-7 ${
              isVisible ? "animate-reveal-delay-2" : "opacity-0"
            }`}
            style={{
              borderRadius: "2.5rem",
              background: "#ccd5ae",
              border: "2px solid rgba(163,177,138,0.8)",
              boxShadow: "0 8px 16px rgba(1,71,46,0.1)",
            }}
          >
            <p
              className="uppercase font-bold text-xs md:text-sm tracking-[0.2em] mb-3"
              style={{ color: "rgba(1,71,46,0.7)" }}
            >
              DIN PERSONLIGA KOKBOK VÄNTAR
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: "#01472e" }}>
              Logga in för att spara recept, hantera allergier och
              kostpreferenser — allt i din personliga kokbok.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
