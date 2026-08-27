import Image from "next/image";
import Reveal from "../_components/Reveal";
import { merchShopUrl } from "@/content/site";
import { getMerch } from "@/sanity/lib/data";

export const revalidate = 60;

export const metadata = {
  title: "Merch",
  description: "Official The Rumble merch; tees, muscle tanks, and sticker sets.",
};

export default async function MerchPage() {
  const merch = await getMerch();
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <p className="eyebrow">Official Store</p>
          <h1 className="display">Merch</h1>
          <p className="lead dim">
            Official tees, tanks, and stickers from the band.
          </p>
        </div>
      </header>

      <section className="section wrap">
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

      <section className="section--tight wrap" style={{ paddingBottom: "6rem" }}>
        <div className="cta-band">
          <h2 className="display">Visit the Full Shop</h2>
          <p>Browse all sizes, colors, and bundles in the official store.</p>
          <a href={merchShopUrl} target="_blank" rel="noreferrer" className="btn btn--gold">
            Shop Now
          </a>
        </div>
      </section>
    </>
  );
}
