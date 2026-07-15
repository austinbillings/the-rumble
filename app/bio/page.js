import Image from "next/image";
import Link from "next/link";
import Reveal from "../_components/Reveal";
import { bio, home } from "@/content/site";

export const metadata = {
  title: "Bio",
  description: bio.lead,
};

export default function BioPage() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <p className="eyebrow">The Story</p>
          <h1 className="display">{bio.heading}</h1>
          <p className="lead dim">{bio.lead}</p>
        </div>
      </header>

      <section className="section wrap">
        <div className="split">
          <Reveal className="split--text">
            <span className="tag">Grammy Nominated</span>
            <p className="lead" style={{ marginTop: "1.4rem" }}>{home.intro}</p>
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

      <section className="section--tight wrap">
        <p className="pullquote">
          {home.pullQuote.split("original songs")[0]}
          <span className="accent">original songs</span>
          {home.pullQuote.split("original songs")[1]}
        </p>
      </section>

      <section className="section wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">The Ensemble</p>
            <h2 className="display">The Band</h2>
          </div>
        </div>
        <div className="members">
          {bio.members.map((m) => (
            <div className="member" key={m.name}>
              <span className="member__name">{m.name}</span>
              <span className="member__role">{m.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section--tight wrap" style={{ paddingBottom: "6rem" }}>
        <Reveal className="cta-band">
          <h2 className="display">Hear It For Yourself</h2>
          <p>Stream both Grammy-nominated albums and watch The Rumble live.</p>
          <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/music" className="btn btn--gold">Listen</Link>
            <Link href="/media" className="btn btn--ghost" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>Watch</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
