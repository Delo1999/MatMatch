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
      <div className="max-w-5xl mx-auto">
        <div className={`${isVisible ? "animate-reveal" : "opacity-0"}`}>
          {/* Main card with compact layout */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "2.5rem",
              background: "#ccd5ae",
            }}
          >
            <div className="p-6 md:p-8 lg:p-10">

              {/* Center: Title */}
              <h2
                className="leading-[0.9] tracking-[-0.03em] mb-6 text-center"
                style={{
                  fontFamily: "var(--font-anton), sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  color: "#01472e",
                }}
              >
                SÖK RECEPT
              </h2>

              {/* Input and button section */}
              <form onSubmit={onSubmit}>
                <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="ingredients"
                      className="uppercase font-bold text-xs tracking-[0.15em] block mb-2 ml-7"
                      style={{ color: "rgba(1,71,46,0.7)" }}
                    >
                      DINA INGREDIENSER
                    </label>
                    <input
                      id="ingredients"
                      type="text"
                      value={ingredients}
                      onChange={(e) => setIngredients(e.target.value)}
                      placeholder="t.ex. ägg, mjölk och mjöl"
                      disabled={loading}
                      className="w-full h-14 px-6 text-base focus:outline-none focus:ring-0 disabled:opacity-50"
                      style={{
                        background: "rgba(254,250,224,0.7)",
                        border: "2px solid rgba(163,177,138,0.3)",
                        borderRadius: "2rem",
                        color: "#01472e",
                        transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#01472e")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(163,177,138,0.3)")}
                    />
                  </div>
                  
                  {/* CTA button */}
                  <button
                    type="submit"
                    disabled={loading || !ingredients.trim()}
                    className="flex items-center justify-center gap-2 h-14 px-8 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-transform hover:scale-105"
                    style={{
                      background: "#01472e",
                      color: "#ccd5ae",
                      boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
                      transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-sage border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="uppercase font-bold text-sm tracking-[0.15em]">
                          SÖK
                        </span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Logged-out prompt - integrated in same card */}
              {!user && (
                <div
                  className="mt-6 p-5"
                  style={{
                    borderRadius: "1.5rem",
                    background: "rgba(254,250,224,0.5)",
                    border: "1px solid rgba(163,177,138,0.3)",
                  }}
                >
                  <p
                    className="uppercase font-bold text-xs tracking-[0.2em] mb-2"
                    style={{ color: "rgba(1,71,46,0.7)" }}
                  >
                    DIN PERSONLIGA KOKBOK
                  </p>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "rgba(1,71,46,0.85)" }}>
                    Logga in för att spara recept, hantera allergier och
                    kostpreferenser i din personliga kokbok.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
