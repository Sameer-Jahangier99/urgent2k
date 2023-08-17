import "@/styles/common/global.css";
import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";

// Components
import Header from "@/components/common/layout/public/Header";
import Footer from "@/components/common/layout/public/Footer";

export const metadata: Metadata = {
  title: "Urgent 2k",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
