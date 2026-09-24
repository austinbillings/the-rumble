import Image from "next/image";
import Link from "next/link";
import Reveal from "../_components/Reveal";
import ReleaseGrid from "../_components/ReleaseGrid";
import { IconArrow } from "../_components/icons";
import { getHomePage, getFeaturedAlbum, getReleases, getVideos } from "@/sanity/lib/data";
import { getUpcomingShows, showDay } from "@/lib/bandsintown";
import MailingListBlade from "../_components/MailingListBlade";

export const revalidate = 60;

export default async function HomePage() {
  const [home, featuredAlbum, releases, videos, shows] = await Promise.all([
    getHomePage(),
    getFeaturedAlbum(),
    getReleases(),
    getVideos(),
    getUpcomingShows(4),
  ]);
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src={home.heroImage}
            alt="The Rumble performing live"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero__scrim" />
        <div className="wrap hero__inner">
          <a
            className="hero__banner"
            href={home.heroBannerHref}
            target="_blank"
            rel="noreferrer"
          >
            <span className="pill">New</span>
            {home.heroBanner}
          </a>
          <h1 className="display">
            <span>The Rumble</span>
            <span className="sub">{home.heroSubtitle}</span>
          </h1>
          <div className="hero__cta">
            <Link href="/music" className="btn btn--primary">
              Listen Now <IconArrow style={{ width: 16, height: 16 }} />
            </Link>
            <Link href="/shows" className="btn btn--ghost">
              Tour Dates
            </Link>
          </div>
        </div>
        <div className="hero__scroll">Scroll</div>
      </section>

      {/* Everything below scrolls over the fixed hero backdrop */}
      <div className="afterhero">

      {/* FEATURED ALBUM */}
      <section className="albumblade">
        <div className="wrap albumblade__inner">
          <Reveal className="albumblade__cover">
            <Image
              src={featuredAlbum.cover}
              alt={featuredAlbum.coverAlt}
              width={1319}
              height={1312}
              sizes="(max-width: 880px) 88vw, 44vw"
              priority={false}
            />
          </Reveal>
          <Reveal className="albumblade__text" delay={120}>
            <h2 className="display albumblade__title">{featuredAlbum.title}</h2>
            <p className="albumblade__note">{featuredAlbum.note}</p>
            <div className="albumblade__cta">
              <a
                href={featuredAlbum.listenUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                {featuredAlbum.listenLabel} <IconArrow style={{ width: 16, height: 16 }} />
              </a>
              <Link href="/shows" className="btn btn--ghost">
                Tour Dates
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="section wrap">
        <div className="split">
          <Reveal className="split--text">
            <h2 className="display">The Band</h2>
            <p className="dim">{home.intro}</p>
            <Link href="/about" className="btn btn--ghost" style={{ marginTop: "0.6rem" }}>
              Read the full bio <IconArrow style={{ width: 16, height: 16 }} />
            </Link>
          </Reveal>
          <Reveal className="split__media split__media--tall" delay={120}>
            <Image
              src={home.introImage}
              alt="The Rumble"
              width={900}
              height={1200}
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* RELEASES */}
      <section className="section wrap">
        <div className="section-head">
          <div>
            <h2 className="display">Latest Releases</h2>
            <p className="dim">The new album plus two Grammy-nominated records, on all platforms.</p>
          </div>
          <Link href="/music" className="btn btn--ghost">All music <IconArrow style={{ width: 16, height: 16 }} /></Link>
        </div>
        <ReleaseGrid releases={releases} />
      </section>

      {/* FEATURED VIDEO */}
      <section className="section wrap">
        <div className="section-head">
          <div>
            <h2 className="display">Video</h2>
          </div>
          <Link href="/media" className="btn btn--ghost">More videos <IconArrow style={{ width: 16, height: 16 }} /></Link>
        </div>
        <Reveal className="video__frame">
          <iframe
            src={`https://www.youtube.com/embed/${videos[0].id}?rel=0`}
            title={videos[0].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </Reveal>
      </section>

      {/* TOUR — next few Bandsintown dates, or a plain CTA if the feed is empty */}
      <section className="section--tight wrap">
        <Reveal className="cta-band">
          <h2 className="display">Upcoming Shows</h2>
          {shows.length > 0 ? (
            <>
              <ul className="tourlist">
                {shows.map((s) => {
                  const { month, day } = showDay(s.datetime);
                  return (
                    <li key={s.id} className="tourlist__row">
                      <span className="tourlist__date">
                        <span className="tourlist__month">{month}</span>
                        <span className="tourlist__day">{day}</span>
                      </span>
                      <span className="tourlist__where">
                        <span className="tourlist__venue">{s.venue}</span>
                        <span className="tourlist__city">{s.location}</span>
                      </span>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--gold tourlist__cta"
                      >
                        {s.soldOut ? "Sold out" : "Tickets"}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <Link href="/shows" className="btn btn--ghost tourlist__all">
                All Tour Dates
              </Link>
            </>
          ) : (
            <>
              <p>Dates, cities, and tickets.</p>
              <Link href="/shows" className="btn btn--gold">View Tour Dates</Link>
            </>
          )}
        </Reveal>
      </section>

      <MailingListBlade />

      </div>
    </>
  );
}
