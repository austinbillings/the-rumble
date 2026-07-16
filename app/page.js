import Image from "next/image";
import Link from "next/link";
import Reveal from "./_components/Reveal";
import { IconArrow } from "./_components/icons";
import { home } from "@/content/site";
import { getReleases, getVideos } from "@/sanity/lib/data";

export const revalidate = 60;

export default async function HomePage() {
  const [releases, videos] = await Promise.all([getReleases(), getVideos()]);
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
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero__scrim" />
        <div className="wrap hero__inner">
          <span className="hero__banner">
            <span className="pill">New</span>
            {home.heroBanner}
          </span>
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

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((dup) => (
            <span key={dup}>
              Mardi Gras Indian Funk · Brass Band · Jazz · Hip-Hop · New Orleans ·
              Grammy Nominated · Mardi Gras Indian Funk · Brass Band · Jazz · Hip-Hop · New Orleans · Grammy Nominated ·
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="section wrap">
        <div className="split">
          <Reveal className="split--text">
            <p className="eyebrow">Who we are</p>
            <h2 className="display">Born in New Orleans</h2>
            <p className="lead dim">{home.intro}</p>
            <Link href="/bio" className="btn btn--ghost" style={{ marginTop: "0.6rem" }}>
              Read the full story <IconArrow style={{ width: 16, height: 16 }} />
            </Link>
          </Reveal>
          <Reveal className="split__media split__media--tall" delay={120}>
            <Image
              src={home.galleryImages[1]}
              alt="The Rumble"
              width={900}
              height={1200}
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE + body */}
      <section className="section--tight wrap">
        <div className="split">
          <Reveal>
            <p className="pullquote">
              Almost everything we play, we{" "}
              <span className="accent">wrote ourselves</span>.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="dim" style={{ fontSize: "1.05rem" }}>{home.body}</p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY MOSAIC */}
      <section className="section wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">On stage</p>
            <h2 className="display">Live</h2>
          </div>
          <Link href="/media" className="btn btn--ghost">
            See all media <IconArrow style={{ width: 16, height: 16 }} />
          </Link>
        </div>
        <div className="mosaic">
          <Link href="/media" className="m-tall">
            <Image src={home.galleryImages[2]} alt="The Rumble live" width={700} height={1000} sizes="50vw" style={{ height: "100%" }} />
          </Link>
          <Link href="/media" className="m-wide">
            <Image src={home.galleryImages[3]} alt="The Rumble live" width={1200} height={800} sizes="50vw" style={{ height: "100%" }} />
          </Link>
          <Link href="/media">
            <Image src={home.galleryImages[0]} alt="The Rumble live" width={700} height={700} sizes="25vw" style={{ height: "100%" }} />
          </Link>
          <Link href="/bio">
            <Image src={home.heroImage} alt="The Rumble" width={700} height={700} sizes="25vw" style={{ height: "100%" }} />
          </Link>
        </div>
      </section>

      {/* RELEASES */}
      <section className="section wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Music</p>
            <h2 className="display">Latest Releases</h2>
            <p className="dim">Two Grammy-nominated albums, available on every platform.</p>
          </div>
          <Link href="/music" className="btn btn--ghost">All music <IconArrow style={{ width: 16, height: 16 }} /></Link>
        </div>
        <div className="releases">
          {releases.map((r, i) => (
            <Reveal key={r.title} className="release" delay={i * 80}>
              <div className="release__num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="release__title">{r.title}</div>
                <div className="release__meta">{r.year} · {r.note}</div>
              </div>
              <a href={r.listenUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
                Listen
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="section wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Watch</p>
            <h2 className="display">From the Stage</h2>
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

      {/* CTA */}
      <section className="section--tight wrap">
        <Reveal className="cta-band">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.85)", justifyContent: "center" }}>On the road</p>
          <h2 className="display">Catch The Rumble Live</h2>
          <p>See where we're playing next and grab your tickets.</p>
          <Link href="/shows" className="btn btn--gold">View Tour Dates</Link>
        </Reveal>
      </section>

      </div>
    </>
  );
}
