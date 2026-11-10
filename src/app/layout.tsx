import type { Metadata } from "next";
import { Red_Rose, Poppins } from "next/font/google";
import "./globals.css";

const redRose = Red_Rose({
  variable: "--font-red-rose",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOXONEXT | Modular iGaming Products Built for Scale",
  description:
    "Popular casino games come together in one Game Aggregator hub. Add our massive portfolio to any gaming website through one API integration.",
  keywords: [
    "iGaming",
    "Casino Software",
    "Game Aggregator",
    "Online Casino",
    "Foxonext",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${redRose.variable} ${poppins.variable} h-full antialiased dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#07080c] text-zinc-100 antialiased font-[family-name:var(--font-poppins)] selection:bg-[#E94E1B] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
