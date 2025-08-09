"use client";
import * as React from "react";
import Link from "next/link";
import { Home, ReceiptText, User, LogOut, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";

export function Nav() {
  const { user, signOut, loading } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex bg-background w-full max-w-none border-b">
        <NavigationMenuList className="flex justify-between w-full px-4">
          <div className="flex">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="inline-flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  <Home className="w-4 h-4 shrink-0" />
                  <span>Hem</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {user && (
              <>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/recept"
                      className="inline-flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                    >
                      <ReceiptText className="w-4 h-4 shrink-0" />
                      Min kokbok
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/profil"
                      className="inline-flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                    >
                      <User className="w-4 h-4 shrink-0" />
                      Min profil
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {loading ? (
              <div className="px-4 py-2 text-sm text-gray-500">Laddar...</div>
            ) : user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">
                  Hej,{" "}
                  {(user.name || user.email)?.charAt(0).toUpperCase() +
                    (user.name || user.email)?.slice(1)}
                  !
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="inline-flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logga ut
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setAuthModalOpen(true)}
                className="inline-flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                Logga in
              </Button>
            )}
          </div>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-background border-b">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo/Home Link */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-lg"
          >
            <Home className="w-5 h-5" />
            MatMatch
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t bg-background">
            <div className="px-4 py-2 space-y-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                <Home className="w-4 h-4" />
                Hem
              </Link>

              {user && (
                <>
                  <Link
                    href="/recept"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                  >
                    <ReceiptText className="w-4 h-4" />
                    Min kokbok
                  </Link>

                  <Link
                    href="/profil"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                  >
                    <User className="w-4 h-4" />
                    Min profil
                  </Link>
                </>
              )}

              <div className="border-t pt-2 mt-2">
                {loading ? (
                  <div className="px-3 py-2 text-sm text-gray-500">
                    Laddar...
                  </div>
                ) : user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-1 text-sm text-gray-700 font-medium">
                      Hej,{" "}
                      {(user.name || user.email)?.charAt(0).toUpperCase() +
                        (user.name || user.email)?.slice(1)}
                      !
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSignOut}
                      className="w-full justify-start gap-3 px-3 py-2 text-sm font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      Logga ut
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setAuthModalOpen(true);
                      closeMobileMenu();
                    }}
                    className="w-full justify-start gap-3 px-3 py-2 text-sm font-medium"
                  >
                    <LogIn className="w-4 h-4" />
                    Logga in
                  </Button>
                )}
              </div>
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
