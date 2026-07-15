import Link from "next/link";
import Reveal from "../_components/Reveal";
import { IconArrow } from "../_components/icons";
import { releases, social } from "@/content/site";

export const metadata = {
  title: "Music",
  description:
    "Stream The Rumble's Grammy-nominated albums Stories from the Battlefield and Live at the Maple Leaf Bar, available on all platforms.",
};

export default function MusicPage() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <p className="eyebrow">Discography</p>
          <h1 className="display">Music</h1>
          <p className="lead dim">
            Two Grammy-nominated albums of original New Orleans Mardi Gras Indian
            funk. Stream on every platform.
          </p>
        </div>
      </header>

      <section className="section wrap">
        <div className="releases">
          {releases.map((r, i) => (
            <Reveal key={r.title} className="release" delay={i * 80}>
              <div className="release__num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                {r.featured && <span className="tag" style={{ marginBottom: "0.6rem" }}>Grammy Nominated</span>}
                <div className="release__title">{r.title}</div>
                <div className="release__meta">{r.year} · {r.note}</div>
              </div>
              <a href={r.listenUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
                Listen <IconArrow style={{ width: 16, height: 16 }} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section--tight wrap" style={{ paddingBottom: "6rem" }}>
        <div className="split">
          <div>
            <p className="eyebrow">Follow along</p>
            <h2 className="display">Never Miss a Drop</h2>
            <p className="dim">
              New music, videos, and announcements land first with our community.
              Subscribe to the mailing list or follow on YouTube.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contact" className="btn btn--gold">Join the List</Link>
            <a href={social.youtube} target="_blank" rel="noreferrer" className="btn btn--ghost">
              YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
