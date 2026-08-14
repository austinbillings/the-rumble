import { Anton, Inter, UnifrakturMaguntia, Grenze_Gotisch } from "next/font/google";
import "./globals.css";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";
import { AudioProvider } from "./_components/AudioPlayer";

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

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unifraktur",
  display: "swap",
});

const grenzeGotisch = Grenze_Gotisch({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-grenze",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://therumbleband.com"),
  title: {
    default: "The Rumble, Ft. Big Chief Joseph Boudreaux Jr.",
    template: "%s · The Rumble",
  },
  description:
    "The Rumble is a Grammy-nominated New Orleans band led by Big Chief Joseph Boudreaux Jr., blending Mardi Gras Indian funk, brass band traditions, jazz, and hip-hop.",
  openGraph: {
    title: "The Rumble, Ft. Big Chief Joseph Boudreaux Jr.",
    description:
      "Grammy-nominated New Orleans Mardi Gras Indian funk. The new album Ain't No Dying is out now.",
    type: "website",
    images: ["/images/band/noe-studio-green.jpg"],
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${unifraktur.variable} ${grenzeGotisch.variable}`}>
      <body>
        <AudioProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </AudioProvider>
      </body>
    </html>
  );
}
