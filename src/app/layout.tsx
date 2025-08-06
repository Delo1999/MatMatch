import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { AuthProvider } from "@/contexts/AuthContext";

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
        <AuthProvider>
          <div className="fixed top-0 left-0 w-full z-50">
            <Nav />
          </div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
