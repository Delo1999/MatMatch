"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        background: "#01472e",
        color: "#ccd5ae",
        borderTopLeftRadius: "5rem",
        borderTopRightRadius: "5rem",
      }}
      className="pt-20 md:pt-28 pb-10 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* 12-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          {/* Left 6 cols: Large newsletter signup */}
          <div className="md:col-span-6 space-y-8">
            <h3
              className="leading-[0.8] tracking-[-0.05em]"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#ccd5ae",
              }}
            >
              HÅLL DIG
              <br />
              INSPIRERAD
            </h3>
            <p style={{ color: "rgba(204,213,174,0.5)" }} className="text-sm max-w-sm leading-relaxed">
              MatMatch hjälper dig använda det du har hemma. Ingredienser in,
              recept ut — smart, snabbt och hållbart.
            </p>

            {/* Underline-only input */}
            <div
              className="flex items-center pb-3 max-w-sm"
              style={{ borderBottom: "1px solid rgba(204,213,174,0.2)" }}
            >
              <input
                type="email"
                placeholder="DIN E-POST"
                className="bg-transparent uppercase font-bold text-[11px] tracking-[0.2em] w-full focus:outline-none"
                style={{
                  color: "#ccd5ae",
                }}
                readOnly
                tabIndex={-1}
              />
              <span
                className="uppercase font-bold text-[10px] tracking-[0.2em] flex-shrink-0 cursor-pointer"
                style={{ color: "rgba(204,213,174,0.4)" }}
              >
                PRENUMERERA
              </span>
            </div>
          </div>

          {/* Right 6 cols: Two columns of links */}
          <div className="md:col-span-3">
            <p
              className="uppercase font-bold text-[10px] tracking-[0.2em] mb-6"
              style={{ color: "rgba(204,213,174,0.3)" }}
            >
              NAVIGERING
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="uppercase font-bold text-[11px] tracking-[0.2em] hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "rgba(204,213,174,0.7)" }}
                >
                  HEM
                </Link>
              </li>
              <li>
                <Link
                  href="/recept"
                  className="uppercase font-bold text-[11px] tracking-[0.2em] hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "rgba(204,213,174,0.7)" }}
                >
                  MIN KOKBOK
                </Link>
              </li>
              <li>
                <Link
                  href="/profil"
                  className="uppercase font-bold text-[11px] tracking-[0.2em] hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "rgba(204,213,174,0.7)" }}
                >
                  MIN PROFIL
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p
              className="uppercase font-bold text-[10px] tracking-[0.2em] mb-6"
              style={{ color: "rgba(204,213,174,0.3)" }}
            >
              OM OSS
            </p>
            <ul className="space-y-3">
              <li>
                <span
                  className="uppercase font-bold text-[11px] tracking-[0.2em]"
                  style={{ color: "rgba(204,213,174,0.7)" }}
                >
                  HÅLLBAR MATLAGNING
                </span>
              </li>
              <li>
                <span
                  className="uppercase font-bold text-[11px] tracking-[0.2em]"
                  style={{ color: "rgba(204,213,174,0.7)" }}
                >
                  AI-GENERERADE RECEPT
                </span>
              </li>
              <li>
                <span
                  className="uppercase font-bold text-[11px] tracking-[0.2em]"
                  style={{ color: "rgba(204,213,174,0.7)" }}
                >
                  MINSKA MATSVINN
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: copyright + legal at 30% opacity */}
        <div
          className="mt-20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(204,213,174,0.1)" }}
        >
          <p
            className="uppercase font-bold text-[10px] tracking-[0.2em]"
            style={{ color: "rgba(204,213,174,0.3)" }}
          >
            &copy; {new Date().getFullYear()} MATMATCH. ALLA RÄTTIGHETER FÖRBEHÅLLNA.
          </p>
          <div className="flex gap-6">
            <span
              className="uppercase font-bold text-[10px] tracking-[0.2em]"
              style={{ color: "rgba(204,213,174,0.3)" }}
            >
              INTEGRITETSPOLICY
            </span>
            <span
              className="uppercase font-bold text-[10px] tracking-[0.2em]"
              style={{ color: "rgba(204,213,174,0.3)" }}
            >
              VILLKOR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
