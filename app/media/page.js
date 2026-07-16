import VideoCard from "../_components/VideoCard";
import { social } from "@/content/site";
import { getVideos } from "@/sanity/lib/data";

export const revalidate = 60;

export const metadata = {
  title: "Media",
  description:
    "Watch The Rumble live and in the studio, from the Portland Waterfront Blues Festival and Downman Sounds Studio to Tipitina's and the legendary Maple Leaf Bar.",
};

export default async function MediaPage() {
  const videos = await getVideos();
  const performances = videos.filter((v) => v.category !== "feature");
  const features = videos.filter((v) => v.category === "feature");

  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <p className="eyebrow">Watch</p>
          <h1 className="display">Media</h1>
          <p className="lead dim">
            Full performances from the festival stage and the studio floor.
          </p>
        </div>
      </header>

      <section className="section wrap">
        <h2 className="display" style={{ marginBottom: "1.75rem" }}>
          Live Performances &amp; Sessions
        </h2>
        <div className="videogrid">
          {performances.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </section>

      {features.length > 0 && (
        <section className="section--tight wrap">
          <h2 className="display" style={{ marginBottom: "1.75rem" }}>
            Features &amp; Interviews
          </h2>
          <div className="videogrid">
            {features.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </section>
      )}

      <section className="section--tight wrap" style={{ paddingBottom: "6rem" }}>
        <div className="cta-band">
          <h2 className="display">Subscribe on YouTube</h2>
          <p>Full sets, studio sessions, and new releases on our channel.</p>
          <a href={social.youtube} target="_blank" rel="noreferrer" className="btn btn--gold">
            Visit the Channel
          </a>
        </div>
      </section>
    </>
  );
}
