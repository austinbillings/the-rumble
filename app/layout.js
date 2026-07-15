import { Anton, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://therumbleband.com"),
  title: {
    default: "The Rumble, Ft. Chief Joseph Boudreaux Jr.",
    template: "%s · The Rumble",
  },
  description:
    "The Rumble is a Grammy-nominated New Orleans band led by Big Chief Joseph Boudreaux Jr., blending Mardi Gras Indian funk, brass band traditions, jazz, and hip-hop.",
  openGraph: {
    title: "The Rumble, Ft. Chief Joseph Boudreaux Jr.",
    description:
      "Grammy-nominated New Orleans Mardi Gras Indian funk. New album Stories from the Battlefield out now.",
    type: "website",
    images: ["/images/band/hero-noe-9510.jpg"],
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
