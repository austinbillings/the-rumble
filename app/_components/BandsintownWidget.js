"use client";

import { useEffect, useRef } from "react";
import { bandsintownArtistId } from "@/content/site";

/**
 * Embeds the official Bandsintown events widget for The Rumble.
 * Loads the widget script once, then lets it hydrate the initializer div.
 */
export default function BandsintownWidget() {
  const ref = useRef(null);

  useEffect(() => {
    const SRC = "https://widgetv3.bandsintown.com/main.min.js";
    let script = document.querySelector(`script[src="${SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SRC;
      script.charset = "utf-8";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="shows-widget" ref={ref}>
      <a
        className="bit-widget-initializer"
        data-artist-name={bandsintownArtistId}
        data-background-color="rgba(20,20,22,1)"
        data-separator-color="rgba(255,255,255,0.12)"
        data-text-color="rgba(244,241,234,1)"
        data-font="Inter, sans-serif"
        data-auto-style="true"
        data-button-label-capitalization="capitalize"
        data-header-capitalization="capitalize"
        data-location-capitalization="capitalize"
        data-venue-capitalization="capitalize"
        data-display-local-dates="true"
        data-local-dates-position="tab"
        data-display-past-dates="true"
        data-display-details="false"
        data-display-lineup="false"
        data-display-start-time="false"
        data-social-share-icon="true"
        data-display-limit="all"
        data-date-format="MMM. D, YYYY"
        data-date-orientation="horizontal"
        data-date-border-color="rgba(255,255,255,0.18)"
        data-date-border-width="1px"
        data-date-capitalization="capitalize"
        data-date-border-radius="10px"
        data-event-ticket-cta-size="medium"
        data-event-ticket-text="TICKETS"
        data-event-ticket-cta-text-color="#FFFFFF"
        data-event-ticket-cta-bg-color="rgba(208,2,27,1)"
        data-event-ticket-cta-border-color="rgba(208,2,27,1)"
        data-event-ticket-cta-border-width="0px"
        data-event-ticket-cta-border-radius="999px"
        data-sold-out-button-text-color="#FFFFFF"
        data-sold-out-button-border-color="#4A4A4A"
        data-sold-out-button-clickable="true"
        data-event-rsvp-position="left"
        data-event-rsvp-cta-size="medium"
        data-event-rsvp-text="REMIND ME"
        data-event-rsvp-cta-text-color="rgba(244,241,234,1)"
        data-event-rsvp-cta-bg-color="rgba(28,28,32,1)"
        data-language="en"
      />
    </div>
  );
}
