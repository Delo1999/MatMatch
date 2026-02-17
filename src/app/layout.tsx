import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { AuthProvider } from "@/contexts/auth-context";
import { QueryProvider } from "@/contexts/query-provider";
import { Toaster } from "@/components/ui/sonner";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MatMatch",
  description:
    "Skriv in vad du har hemma och få receptförslag direkt. MatMatch hjälper dig laga goda huvudrätter med ingredienserna du redan har - smart, snabbt och matsmart.",
  keywords: [
    "matmatch",
    "matmatch.se",
    "matmatch.com",
    "matmatch.io, matmatch.org, ingredienser till recept, matmatch.net",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-cream text-forest`}
      >
        <QueryProvider>
          <AuthProvider>
            <div className="fixed top-0 left-0 w-full z-50">
              <Nav />
            </div>
            <div>{children}</div>
            <Toaster />

            {/* SVG Noise Overlay for analog texture */}
            <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.65"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
