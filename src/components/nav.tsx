"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { AuthModal } from "@/components/auth/auth-modal";

export function Nav() {
  const { user, signOut, loading } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleSignOut = async () => {
    try {
      await signOut();
      setMobileMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Navigation — Fixed top bar */}
      <nav className="hidden md:flex items-center justify-between w-full px-8 py-5">
        {/* Left: Empty space for balance */}
        <div className="w-[120px]"></div>

        {/* Center: Pill-shaped navigation */}
        <div
          className="rounded-full px-2 py-2 flex items-center gap-1"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.2)",
          }}
        >
          <Link
            href="/"
            className={`uppercase font-bold text-[12px] tracking-[0.2em] px-7 py-3 rounded-full transition-all duration-500 ${
              pathname === "/"
                ? "bg-forest text-cream"
                : "text-forest hover:text-forest hover:bg-white/20"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            HEM
          </Link>
          {user && (
            <>
              <Link
                href="/recept"
                className={`uppercase font-bold text-[12px] tracking-[0.2em] px-7 py-3 rounded-full transition-all duration-500 ${
                  pathname === "/recept"
                    ? "bg-forest text-cream"
                    : "text-forest hover:text-forest hover:bg-white/20"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                MIN KOKBOK
              </Link>
              <Link
                href="/profil"
                className={`uppercase font-bold text-[12px] tracking-[0.2em] px-7 py-3 rounded-full transition-all duration-500 ${
                  pathname === "/profil"
                    ? "bg-forest text-cream"
                    : "text-forest hover:text-forest hover:bg-white/20"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                PROFIL
              </Link>
            </>
          )}
        </div>

        {/* Right: Auth button */}
        <div className="flex items-center gap-4">
          {loading ? (
            <span className="uppercase font-bold text-[12px] tracking-[0.2em] text-forest/40">
              ...
            </span>
          ) : user ? (
            <button
              onClick={handleSignOut}
              className="uppercase font-bold text-[12px] tracking-[0.2em] bg-white text-forest rounded-full px-7 py-3 shadow-forest hover:bg-forest hover:text-cream transition-all duration-500 flex items-center gap-2"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <LogOut className="w-4 h-4" />
              LOGGA UT
            </button>
          ) : (
            <button
              onClick={() => setAuthModalOpen(true)}
              className="uppercase font-bold text-[12px] tracking-[0.2em] bg-white text-forest rounded-full px-7 py-3 shadow-forest hover:bg-forest hover:text-cream transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              LOGGA IN
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <div className="w-8"></div>

          <button
            onClick={() =>
              user || !loading
                ? setMobileMenuOpen(!mobileMenuOpen)
                : setAuthModalOpen(true)
            }
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-forest/5 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-forest" />
            ) : (
              <Menu className="w-5 h-5 text-forest" />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div
            className="border-t border-moss/20 px-5 py-4 space-y-1"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(254,250,224,0.95)",
            }}
          >
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block uppercase font-bold text-[12px] tracking-[0.2em] text-forest px-5 py-4 rounded-2xl hover:bg-forest/10 transition-all duration-300"
            >
              HEM
            </Link>
            {user && (
              <>
                <Link
                  href="/recept"
                  onClick={closeMobileMenu}
                  className="block uppercase font-bold text-[12px] tracking-[0.2em] text-forest px-5 py-4 rounded-2xl hover:bg-forest/10 transition-all duration-300"
                >
                  MIN KOKBOK
                </Link>
                <Link
                  href="/profil"
                  onClick={closeMobileMenu}
                  className="block uppercase font-bold text-[12px] tracking-[0.2em] text-forest px-5 py-4 rounded-2xl hover:bg-forest/10 transition-all duration-300"
                >
                  PROFIL
                </Link>
              </>
            )}
            <div className="border-t border-moss/20 pt-3 mt-3">
              {loading ? (
                <span className="block uppercase font-bold text-[12px] tracking-[0.2em] text-forest/40 px-5 py-4">
                  LADDAR...
                </span>
              ) : user ? (
                <button
                  onClick={handleSignOut}
                  className="w-full text-left uppercase font-bold text-[12px] tracking-[0.2em] text-forest px-5 py-4 rounded-2xl hover:bg-forest/10 transition-all duration-300 flex items-center gap-3"
                >
                  <LogOut className="w-4 h-4" />
                  LOGGA UT
                </button>
              ) : (
                <button
                  onClick={() => {
                    setAuthModalOpen(true);
                    closeMobileMenu();
                  }}
                  className="w-full text-left uppercase font-bold text-[12px] tracking-[0.2em] text-forest px-5 py-4 rounded-2xl hover:bg-forest/10 transition-all duration-300 flex items-center gap-3"
                >
                  <LogIn className="w-4 h-4" />
                  LOGGA IN
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  );
}
