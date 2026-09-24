import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { AudioProvider } from "../_components/AudioPlayer";
import { getFeaturedTrack } from "@/sanity/lib/data";

/**
 * Chrome for the public site. Lives in the (site) route group so /studio,
 * which renders the Sanity Studio full-screen, doesn't inherit the fixed
 * header, footer, or audio player.
 */
export const revalidate = 60;

export default async function SiteLayout({ children }) {
  const featuredTrack = await getFeaturedTrack();
  return (
    <AudioProvider featuredTrack={featuredTrack}>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </AudioProvider>
  );
}
