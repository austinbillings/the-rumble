import Link from "next/link";
import NewsletterForm from "../_components/NewsletterForm";
import { IconInstagram, IconFacebook, IconYouTube } from "../_components/icons";
import { contact, social } from "@/content/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with The Rumble, booking inquiries, general contact, and the mailing list.",
};

export default function ContactPage() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="display">Contact</h1>
          <p className="lead dim">
            Booking, press, or just to say hey. Here's how to reach us.
          </p>
        </div>
      </header>

      <section className="section wrap">
        <div className="contact-grid">
          <div>
            <h2 className="display" style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)" }}>Join the Mailing List</h2>
            <p className="dim" style={{ marginBottom: "1.8rem" }}>{contact.newsletterBlurb}</p>
            <NewsletterForm />
          </div>

          <div>
            <div className="contact-card">
              <h4 style={{ marginTop: 0, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
                Booking Inquiries
              </h4>
              <p style={{ margin: "0.5rem 0 0" }}>
                <a href={`mailto:${contact.booking}`}>{contact.booking}</a>
              </p>
            </div>

            <div className="contact-card">
              <h4 style={{ marginTop: 0, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
                General
              </h4>
              <p style={{ margin: "0.5rem 0 0" }}>
                <a href={`mailto:${contact.general}`}>{contact.general}</a>
              </p>
            </div>

            <div className="contact-card">
              <h4 style={{ marginTop: 0, fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
                Follow
              </h4>
              <div className="socials" style={{ marginTop: "0.9rem" }}>
                <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram /></a>
                <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook /></a>
                <a href={social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><IconYouTube /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight wrap" style={{ paddingBottom: "6rem" }}>
        <div className="cta-band">
          <h2 className="display">Support the Tradition</h2>
          <p>Help Big Chief Joseph Boudreaux Jr. continue a 150-year-old Black Masking Indian tradition, bead by bead.</p>
          <Link href="/suit" className="btn btn--gold">Learn About the Suit</Link>
        </div>
      </section>
    </>
  );
}
