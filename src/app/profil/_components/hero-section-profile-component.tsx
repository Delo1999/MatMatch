"use client";
import { useEffect, useState } from "react";

function StaggeredText({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            animation: `letter-reveal 0.8s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * 0.05}s forwards`,
            opacity: 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function HeroSectionProfileComponent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center items-center"
      style={{ background: "#01472e", minHeight: "45vh" }}
    >
      {/* Floating shapes */}
      <div
        className="absolute top-[16%] right-[10%] w-[100px] h-[130px] md:w-[180px] md:h-[230px] overflow-hidden"
        style={{
          borderRadius: "3rem",
          transform: `translateY(${scrollY * 0.04}px)`,
          animation: "float 6s ease-in-out infinite",
          background: "rgba(204,213,174,0.06)",
          boxShadow: "0 25px 50px -12px rgba(1,71,46,0.3)",
        }}
      />
      <div
        className="absolute bottom-[20%] left-[6%] w-[80px] h-[100px] md:w-[140px] md:h-[180px] overflow-hidden"
        style={{
          borderRadius: "3rem",
          transform: `translateY(${scrollY * -0.03}px)`,
          animation: "float 6s ease-in-out infinite",
          animationDelay: "2s",
          background: "rgba(163,177,138,0.06)",
        }}
      />

      <div className="relative z-10 text-center py-16 md:py-20">
        <h1
          className="leading-[0.85] tracking-[-0.04em]"
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            color: "#ccd5ae",
          }}
        >
          <span className="block">
            <StaggeredText text="MIN" baseDelay={0.2} />
          </span>
          <span className="block">
            <StaggeredText text="PROFIL" baseDelay={0.45} />
          </span>
        </h1>
      </div>

      {/* Bottom subtitle */}
      <div
        className="relative z-10 px-8 md:px-16 pb-12 w-full max-w-5xl mx-auto"
        style={{
          animation: "reveal-up 1.2s cubic-bezier(0.16,1,0.3,1) 0.8s forwards",
          opacity: 0,
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: "rgba(204,213,174,0.5)" }}>
            Anpassa din MatMatch-upplevelse med personliga inställningar.
          </p>
          <div className="flex items-center gap-6">
            <span
              className="uppercase font-bold text-[9px] tracking-[0.2em] flex items-center gap-2"
              style={{ color: "rgba(204,213,174,0.3)" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "rgba(204,213,174,0.3)" }} />
              ALLERGIER
            </span>
            <span
              className="uppercase font-bold text-[9px] tracking-[0.2em] flex items-center gap-2"
              style={{ color: "rgba(204,213,174,0.3)" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "rgba(204,213,174,0.3)" }} />
              PREFERENSER
            </span>
            <span
              className="uppercase font-bold text-[9px] tracking-[0.2em] flex items-center gap-2"
              style={{ color: "rgba(204,213,174,0.3)" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "rgba(204,213,174,0.3)" }} />
              SÄKERHET
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
