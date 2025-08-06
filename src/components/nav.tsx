"use client";
import * as React from "react";
import Link from "next/link";
import { Home, Smile, ReceiptText, User, LogOut, LogIn } from "lucide-react";
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

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <NavigationMenu
        className="bg-background w-full max-w-none"
        viewport={false}
      >
        <NavigationMenuList className="flex justify-between w-full">
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

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  );
}
