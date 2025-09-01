import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { AuthProvider } from "@/contexts/auth-context";
import { QueryProvider } from "@/contexts/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            <div className="fixed top-0 left-0 w-full z-50">
              <Nav />
            </div>
            <div className="pt-16 md:pt-14">{children}</div>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
