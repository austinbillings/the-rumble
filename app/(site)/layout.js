import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { AudioProvider } from "../_components/AudioPlayer";

/**
 * Chrome for the public site. Lives in the (site) route group so /studio,
 * which renders the Sanity Studio full-screen, doesn't inherit the fixed
 * header, footer, or audio player.
 */
export default function SiteLayout({ children }) {
  return (
    <AudioProvider>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </AudioProvider>
  );
}
