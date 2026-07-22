import Image from "next/image";
import Reveal from "../_components/Reveal";
import { suit, contact } from "@/content/site";

export const metadata = {
  title: "The Suit",
  description:
    "The sacred Black Masking Indian suit of Big Chief Joseph Boudreaux Jr., handmade from scratch each year, bead by bead and feather by feather.",
};

export default function SuitPage() {
  const { donate } = suit;
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <p className="eyebrow">Black Masking Indian Tradition</p>
          <h1 className="display">{suit.heading}</h1>
          <p className="lead dim">
            Every year, Big Chief Joseph Boudreaux Jr. builds a brand-new suit by
            hand, hundreds of thousands of beads, every one part of the story.
          </p>
        </div>
      </header>

      {/* Image trio */}
      <section className="section--tight wrap">
        <div className="mosaic">
          <div className="m-tall card">
            <Image src={suit.images[0]} alt="Big Chief's suit detail" width={800} height={1028} sizes="50vw" style={{ height: "100%", objectFit: "cover" }} />
          </div>
          <div className="card">
            <Image src={suit.images[1]} alt="Big Chief's suit detail" width={820} height={800} sizes="25vw" style={{ height: "100%", objectFit: "cover" }} />
          </div>
          <div className="card">
            <Image src={suit.images[2]} alt="Big Chief's suit detail" width={1037} height={800} sizes="25vw" style={{ height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Prose sections */}
      <section className="section wrap">
        <div className="grid" style={{ maxWidth: "820px" }}>
          {suit.sections.map((s, i) => (
            <Reveal key={s.title} className="suit-section" delay={i * 40}>
              <h2 className="display" style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)" }}>{s.title}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="dim" style={{ fontSize: "1.05rem" }}>{p}</p>
              ))}
              {s.roles && (
                <ul className="roles">
                  {s.roles.map((r) => (
                    <li key={r.name}>
                      <b>{r.name}</b>
                      <span>{r.desc}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.outro && <p className="dim" style={{ fontSize: "1.05rem" }}>{s.outro}</p>}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section--tight wrap">
        <p className="eyebrow">By the numbers</p>
        <div className="suit-stats">
          {donate.stats.map((st) => (
            <div className="suit-stat" key={st.label}>
              <div className="suit-stat__v">{st.value}</div>
              <div className="suit-stat__l">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Donate */}
      <section className="section wrap">
        <Reveal className="donate">
          <span className="tag">150-year tradition</span>
          <h2 className="display" style={{ marginTop: "1rem" }}>{donate.title}</h2>
          <p className="dim" style={{ fontSize: "1.05rem", maxWidth: "62ch" }}>{donate.blurb}</p>
          <p className="dim" style={{ maxWidth: "62ch" }}>{donate.statsIntro}</p>
          {/* No online donation flow yet — email is the honest path for v1. */}
          <a
            href={`mailto:${contact.general}?subject=${encodeURIComponent("Supporting the Suit")}`}
            className="btn btn--gold"
            style={{ marginTop: "1rem" }}
          >
            {donate.cta}
          </a>
        </Reveal>
      </section>
    </>
  );
}
