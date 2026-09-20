import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Discography as a grid of square album-cover tiles. Used on the homepage
 * ("Latest Releases") and on /music.
 *
 * Releases without a `cover` fall back to a typographic sleeve so the grid
 * stays even until the real art lands — see the TODO in content/site.js.
 *
 * `showTags` surfaces the "Grammy Nominated" / "New Album" badge; /music does,
 * the homepage doesn't.
 */
export default function ReleaseGrid({ releases, showTags = false }) {
  return (
    <div className="covergrid">
      {releases.map((r, i) => (
        <Reveal key={r.title} delay={(i % 4) * 70}>
          <a
            href={r.listenUrl}
            target="_blank"
            rel="noreferrer"
            className="covertile"
          >
            <span className="covertile__art">
              {r.cover ? (
                <Image
                  src={r.cover}
                  alt={`${r.title} cover art`}
                  width={600}
                  height={600}
                  sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw"
                />
              ) : (
                <span className="covertile__fallback" aria-hidden="true">
                  <span className="covertile__fallback-title">{r.title}</span>
                </span>
              )}
              <span className="covertile__listen">Listen</span>
            </span>
            {showTags && (r.tag || r.featured) && (
              <span className="covertile__tag">{r.tag || "Grammy Nominated"}</span>
            )}
            <span className="covertile__title">{r.title}</span>
            <span className="covertile__meta">
              {r.year} · {r.note}
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
