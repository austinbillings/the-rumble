import BandsintownWidget from "../_components/BandsintownWidget";
import { contact, social } from "@/content/site";

export const metadata = {
  title: "Shows",
  description:
    "Upcoming tour dates and tickets for The Rumble. Catch the Grammy-nominated New Orleans band live.",
};

export default function ShowsPage() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <p className="eyebrow">On Tour</p>
          <h1 className="display">Shows</h1>
          <p className="lead dim">
            Upcoming dates, cities, and tickets below.
          </p>
        </div>
      </header>

      <section className="section wrap">
        <BandsintownWidget />
        <noscript>
          <div className="shows-fallback">
            Enable JavaScript to view live tour dates, or find us on{" "}
            <a href={social.facebook} target="_blank" rel="noreferrer" style={{ color: "var(--gold)" }}>
              Facebook
            </a>.
          </div>
        </noscript>
      </section>

      <section className="section--tight wrap" style={{ paddingBottom: "6rem" }}>
        <div className="cta-band">
          <h2 className="display">Book The Rumble</h2>
          <p>Bring authentic New Orleans Mardi Gras Indian funk to your stage, festival, or event.</p>
          <a href={`mailto:${contact.booking}`} className="btn btn--gold">
            {contact.booking}
          </a>
        </div>
      </section>
    </>
  );
}
