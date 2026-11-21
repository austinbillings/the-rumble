import VideoCard from "../../_components/VideoCard";
import { getSiteSettings, getVideos } from "@/sanity/lib/data";
import MailingListBlade from "../../_components/MailingListBlade";

export const revalidate = 60;

export const metadata = {
  title: "Media",
  description:
    "Live performances, studio sessions, interviews, and features from The Rumble.",
};

export default async function MediaPage() {
  const [videos, { social }] = await Promise.all([getVideos(), getSiteSettings()]);
  const musicVideos = videos.filter((v) => v.category === "music-video");
  const performances = videos.filter((v) => v.category !== "feature" && v.category !== "music-video");
  const PerfHeading = musicVideos.length > 0 ? "h2" : "h1";
  const features = videos.filter((v) => v.category === "feature");

  return (
    <>
      {musicVideos.length > 0 && (
        <section className="section section--pagetop wrap">
          <h1 className="display display--sub" style={{ marginBottom: "1.75rem" }}>
            Music Videos
          </h1>
          <div className="videogrid">
            {musicVideos.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </section>
      )}

      <section className={musicVideos.length > 0 ? "section--tight wrap" : "section section--pagetop wrap"}>
        <PerfHeading className="display display--sub" style={{ marginBottom: "1.75rem" }}>
          Live Performances &amp; Sessions
        </PerfHeading>
        <div className="videogrid">
          {performances.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </section>

      {features.length > 0 && (
        <section className="section--tight wrap">
          <h2 className="display display--sub" style={{ marginBottom: "1.75rem" }}>
            Features &amp; Interviews
          </h2>
          <div className="videogrid">
            {features.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </section>
      )}

      <section className="section--tight wrap">
        <div className="cta-band">
          <h2 className="display">Subscribe on YouTube</h2>
          <p>Full sets, studio sessions, and new videos.</p>
          <a href={social.youtube} target="_blank" rel="noreferrer" className="btn btn--gold">
            Visit the Channel
          </a>
        </div>
      </section>
      <MailingListBlade />
    </>
  );
}
