import BandsintownWidget from "../../_components/BandsintownWidget";
import { getSiteSettings } from "@/sanity/lib/data";
import MailingListBlade from "../../_components/MailingListBlade";

export const revalidate = 60;

export const metadata = {
  title: "Shows",
  description:
    "Upcoming tour dates and tickets for The Rumble.",
};

export default async function ShowsPage() {
  const { contact, social } = await getSiteSettings();
  return (
    <>
      <header className="pagehead pagehead--tight">
        <div className="wrap">
          <h1 className="display display--sub">Shows</h1>
          <p className="dim">Upcoming dates, cities, and tickets</p>
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

      <section className="section--tight wrap">
        <div className="cta-band">
          <h2 className="display">Booking</h2>
          <p>For festivals, venues, and private events.</p>
          <a href={`mailto:${contact.booking}`} className="btn btn--gold">
            Booking Inquiries
          </a>
        </div>
      </section>
      <MailingListBlade />
    </>
  );
}
