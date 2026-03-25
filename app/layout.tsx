import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Initialize Luxury Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // For use in Tailwind if needed
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// 2. Premium Metadata for Abuja Real Estate
export const metadata: Metadata = {
  title: "Onwe Realtors | Prime Abuja Real Estate & Asset Management",
  description:
    "Exquisite property acquisitions in Maitama, Asokoro, and Guzape. Secure your legacy with Abuja's most trusted integrated real estate firm.",
  icons: {
    icon: "/logo.png", // Sets your logo as the browser favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth antialiased`}
    >
      <body className="bg-white text-[#002349] selection:bg-[#C5A059] selection:text-white">
        {/* The min-h-screen ensures the footer stays at the bottom on empty pages */}
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
