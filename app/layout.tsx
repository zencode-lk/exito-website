import type { Metadata } from "next";
import { Cormorant, Lato, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-cookie",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Exito Fasteners",
    default: 'Exito Fasteners | Premier Leather Manufacturer',
  },
  description:
    "Global B2B Leather Manufacturer. Professional leather manufacturing services including belts, and custom solutions.",
  icons: {
    icon: "/exito.svg",
    shortcut: "/exito.svg",
    apple: "/exito.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${lato.variable} ${dancingScript.variable} bg-coffee antialiased overflow-x-hidden`}
      >
        <div className="flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
