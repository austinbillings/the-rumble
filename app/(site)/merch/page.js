import Image from "next/image";
import Reveal from "../../_components/Reveal";
import { getMerch, getSiteSettings } from "@/sanity/lib/data";
import MailingListBlade from "../../_components/MailingListBlade";

export const revalidate = 60;

export const metadata = {
  title: "Merch",
  description: "The Rumble merch — tees, tanks, stickers, and records.",
};

export default async function MerchPage() {
  const [merch, { merchShopUrl }] = await Promise.all([getMerch(), getSiteSettings()]);
  return (
    <>
      <section className="section section--pagetop wrap">
        <h1 className="display display--sub" style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          Merch
        </h1>
        <div className="merchgrid">
          {merch.map((p, i) => {
            const card = (
              <>
                <div className="product__img">
                  {p.soldOut && <span className="product__badge">Sold out</span>}
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={500}
                    height={500}
                    sizes="(max-width: 680px) 50vw, 25vw"
                  />
                </div>
                <div className="product__name">{p.name}</div>
                <div className="product__price">
                  {p.soldOut ? "Sold out" : p.price || "View in shop"}
                </div>
                {!p.soldOut && p.note && <div className="product__note">{p.note}</div>}
              </>
            );
            return (
              <Reveal key={p.name} delay={(i % 4) * 60}>
                {p.soldOut ? (
                  <div className="product product--soldout">{card}</div>
                ) : (
                  <a
                    href={p.shopUrl || merchShopUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="product"
                  >
                    {card}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section--tight wrap">
        <div className="cta-band">
          <h2 className="display">Full Shop</h2>
          <p>All sizes, colors, and bundles.</p>
          <a href={merchShopUrl} target="_blank" rel="noreferrer" className="btn btn--gold">
            Shop Now
          </a>
        </div>
      </section>
      <MailingListBlade />
    </>
  );
}
