import VideoCard from "../_components/VideoCard";
import { videos, social } from "@/content/site";

export const metadata = {
  title: "Media",
  description:
    "Watch The Rumble live and in the studio, performances from the Portland Waterfront Blues Festival, Downman Sounds Studio, and the legendary Maple Leaf Bar.",
};

export default function MediaPage() {
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
        <div className="videogrid">
          {videos.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </section>

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
