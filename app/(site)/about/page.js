import Image from "next/image";
import Link from "next/link";
import Reveal from "../../_components/Reveal";
import { bio, home } from "@/content/site";
import MailingListBlade from "../../_components/MailingListBlade";

export const metadata = {
  title: "About",
  description: bio.lead,
};

export default function BioPage() {
  return (
    <>
      <header className="pagehead pagehead--tight">
        <div className="wrap">
          <h1 className="display">{bio.heading}</h1>
          <p className="dim">{bio.lead}</p>
        </div>
      </header>

      <section className="section wrap">
        <div className="split">
          <Reveal className="split--text">
            <span className="tag">Grammy Nominated</span>
            <p className="dim">{home.intro}</p>
            <p className="dim">{home.body}</p>
            <p className="dim">{bio.accolades}</p>
          </Reveal>
          <Reveal className="split__media" delay={120}>
            <Image
              src={bio.image}
              alt="Big Chief Joseph Boudreaux Jr. and The Rumble"
              width={900}
              height={1125}
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="section wrap lineup">
        <h2 className="display lineup__title">The Band</h2>
        <ul className="members">
          {bio.members.map((m) => (
            <li className="member" key={m.name}>
              <span className="member__name">{m.name}</span>
              <span className="member__role">{m.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section--tight wrap">
        <Reveal className="cta-band">
          <h2 className="display">Music &amp; Video</h2>
          <p>Stream the albums and watch live performances.</p>
          <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/music" className="btn btn--gold">Listen</Link>
            <Link href="/media" className="btn btn--ghost" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>Watch</Link>
          </div>
        </Reveal>
      </section>
      <MailingListBlade />
    </>
  );
}
