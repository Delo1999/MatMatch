import * as React from "react";
import Link from "next/link";
import { Home, Smile, ReceiptText } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Nav() {
  return (
    <NavigationMenu
      className="bg-background w-full max-w-none"
      viewport={false}
    >
      <NavigationMenuList>
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

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/recept"
              className="inline-flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
            >
              <ReceiptText className="w-4 h-4 shrink-0" />
              Mina recept
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/profil"
              className="inline-flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
            >
              <Smile className="w-4 h-4 shrink-0" />
              Min profil
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
