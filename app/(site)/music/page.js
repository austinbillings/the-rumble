import Link from "next/link";
import ReleaseGrid from "../../_components/ReleaseGrid";
import { social } from "@/content/site";
import { getReleases } from "@/sanity/lib/data";

export const revalidate = 60;

export const metadata = {
  title: "Music",
  description:
    "Albums and singles from The Rumble, including the new album Ain't No Dying.",
};

export default async function MusicPage() {
  const releases = await getReleases();
  return (
    <>
      <section className="section section--pagetop wrap">
        <h1 className="display display--sub" style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          Music
        </h1>
        <ReleaseGrid releases={releases} showTags />
      </section>

      <section className="section--tight wrap">
        <div className="split">
          <div>
            <h2 className="display">Stay Updated</h2>
            <p className="dim" style={{ marginTop: "1rem" }}>
              New music, videos, and tour dates by email, or follow along on
              YouTube.
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
