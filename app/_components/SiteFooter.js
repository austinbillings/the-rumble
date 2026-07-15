import Link from "next/link";
import { nav, social, contact, band } from "@/content/site";
import { IconInstagram, IconFacebook, IconYouTube } from "./icons";

export default function SiteFooter() {
  const year = 2026;
  return (
    <footer className="ftr">
      <div className="wrap ftr__top">
        <div>
          <Link href="/" className="brand" style={{ fontSize: "1.8rem" }}>
            THE&nbsp;<b>RUMBLE</b>
          </Link>
          <p className="dim" style={{ marginTop: "1rem", maxWidth: "34ch" }}>
            Grammy-nominated Mardi Gras Indian funk from New Orleans, fronted by
            Big Chief Joseph Boudreaux Jr.
          </p>
          <div className="socials" style={{ marginTop: "1.5rem" }}>
            <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href={social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <IconYouTube />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <div className="ftr__links">
            <Link href="/">Home</Link>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4>Booking & Contact</h4>
          <div className="ftr__links">
            <a href={`mailto:${contact.booking}`}>{contact.booking}</a>
            <a href={`mailto:${contact.general}`}>{contact.general}</a>
            <Link href="/contact">Join the mailing list</Link>
          </div>
        </div>
      </div>

      <div className="wrap ftr__bottom">
        <span>© {year} {band.fullName}, All Rights Reserved.</span>
        <span>New Orleans, Louisiana</span>
      </div>
    </footer>
  );
}
