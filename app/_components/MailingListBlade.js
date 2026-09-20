import NewsletterForm from "./NewsletterForm";

/**
 * Compact mailing-list blade for the bottom of content pages.
 * The /contact page has the full form, so it doesn't use this.
 */
export default function MailingListBlade() {
  return (
    <section className="section--tight wrap mlblade__wrap">
      <div className="mlblade">
        <p className="mlblade__text">Join our email list</p>
        <div className="mlblade__form">
          <NewsletterForm compact />
        </div>
      </div>
    </section>
  );
}
