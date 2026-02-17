"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

function StaggeredText({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  return (
    <span className="inline-block" style={{ paddingRight: "0.1em" }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{
            animation: `letter-reveal 0.8s cubic-bezier(0.16,1,0.3,1) ${baseDelay + i * 0.05}s forwards`,
            opacity: 0,
            paddingLeft: "0.02em",
            paddingRight: "0.02em",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function HeroSectionHomeComponent() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center py-20 md:py-24"
      style={{ background: "#ccd5ae" }}
    >
      {/* Floating organic image 1 — top right */}
      <div
        className="absolute top-[8%] right-[6%] w-[140px] h-[180px] md:w-[220px] md:h-[280px] overflow-hidden"
        style={{
          borderRadius: "3rem",
          transform: `translateY(${scrollY * 0.05}px)`,
          animation: "float 10s ease-in-out infinite",
          animationDelay: "0s",
          boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
        }}
      >
        <div className="w-full h-full flex items-center justify-center" style={{ background: "#e9edc9" }}>
          <span className="text-6xl md:text-8xl opacity-75">🍋</span>
        </div>
      </div>

      {/* Floating organic image 2 — bottom left */}
      <div
        className="absolute bottom-[10%] left-[4%] w-[110px] h-[140px] md:w-[180px] md:h-[230px] overflow-hidden"
        style={{
          borderRadius: "3rem",
          transform: `translateY(${scrollY * -0.03}px)`,
          animation: "float 10s ease-in-out infinite",
          animationDelay: "2s",
          boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
        }}
      >
        <div className="w-full h-full flex items-center justify-center" style={{ background: "#a3b18a" }}>
          <span className="text-6xl md:text-8xl opacity-75">🌶️</span>
        </div>
      </div>

      {/* Floating organic image 3 — mid left */}
      <div
        className="absolute top-[25%] left-[10%] w-[90px] h-[110px] md:w-[150px] md:h-[190px] overflow-hidden hidden md:block"
        style={{
          borderRadius: "3rem",
          transform: `translateY(${scrollY * 0.04}px)`,
          animation: "float 10s ease-in-out infinite",
          animationDelay: "4s",
          boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
        }}
      >
        <div className="w-full h-full flex items-center justify-center" style={{ background: "#fefae0" }}>
          <span className="text-5xl md:text-7xl opacity-75">🥑</span>
        </div>
      </div>

      {/* Floating organic image 4 — bottom right */}
      <div
        className="absolute bottom-[12%] right-[8%] w-[100px] h-[120px] md:w-[160px] md:h-[200px] overflow-hidden"
        style={{
          borderRadius: "3rem",
          transform: `translateY(${scrollY * 0.03}px)`,
          animation: "float 10s ease-in-out infinite",
          animationDelay: "3s",
          boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
        }}
      >
        <div className="w-full h-full flex items-center justify-center" style={{ background: "#e9edc9" }}>
          <span className="text-5xl md:text-7xl opacity-75">🥕</span>
        </div>
      </div>

      {/* Floating organic image 5 — mid right (very close to matmatch) */}
      <div
        className="absolute top-[40%] right-[18%] w-[110px] h-[135px] md:w-[180px] md:h-[220px] overflow-hidden"
        style={{
          borderRadius: "3rem",
          transform: `translateY(${scrollY * 0.045}px)`,
          animation: "float 10s ease-in-out infinite",
          animationDelay: "1.5s",
          boxShadow: "0 25px 50px -12px rgba(1,71,46,0.2)",
        }}
      >
        <div className="w-full h-full flex items-center justify-center" style={{ background: "#d4ddb3" }}>
          <span className="text-6xl md:text-8xl opacity-75">🥦</span>
        </div>
      </div>

      {/* Massive display text — TWO LINES */}
      <div className="relative z-10 text-center px-4">
        <h1
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: "clamp(5rem, 23vw, 20rem)",
            lineHeight: "0.75",
            letterSpacing: "-0.05em",
            color: "#01472e",
          }}
        >
          <span className="block">
            <StaggeredText text="MAT" baseDelay={0.2} />
          </span>
          <span className="block">
            <StaggeredText text="MATCH" baseDelay={0.45} />
          </span>
        </h1>
      </div>

      {/* Bottom: Dual-column descriptive text + labels */}
      <div className="relative w-full px-8 md:px-16 mt-12 md:mt-16 pb-8 md:pb-12">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-5xl mx-auto"
          style={{
            animation: "reveal-up 1.2s cubic-bezier(0.16,1,0.3,1) 0.8s forwards",
            opacity: 0,
          }}
        >
          <div>
            <p
              className="uppercase font-bold text-sm md:text-base tracking-[0.2em] mb-3"
              style={{ color: "rgba(1,71,46,0.6)" }}
            >
              KONCEPTET
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(1,71,46,0.8)" }}>
              Tomt i huvudet men fullt i kylen? Skriv in vad du har hemma och
              få receptförslag direkt — smart, snabbt och matsmart.
            </p>
          </div>
          <div>
            <p
              className="uppercase font-bold text-sm md:text-base tracking-[0.2em] mb-3"
              style={{ color: "rgba(1,71,46,0.6)" }}
            >
              URSPRUNG — SVERIGE
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(1,71,46,0.8)" }}>
              AI-driven matlagning som minskar matsvinn. Ingredienser in,
              skräddarsydda recept ut. Din hållbara köksassistent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
