import { bandsintownArtistId, bandsintownAppId } from "@/content/site";

const API = "https://rest.bandsintown.com/v3.1/artists";

/**
 * Next few upcoming dates from the public Bandsintown REST API, for the
 * homepage tour blade. /shows keeps using the official embed widget.
 *
 * Returns [] on any failure (network, rate limit, schema change) so the
 * caller can fall back to a plain "View Tour Dates" band.
 */
export async function getUpcomingShows(limit = 4) {
  const url =
    `${API}/${encodeURIComponent(bandsintownArtistId)}/events` +
    `?app_id=${encodeURIComponent(bandsintownAppId)}&date=upcoming`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const events = await res.json();
    if (!Array.isArray(events)) return [];

    return events.slice(0, limit).map((e) => ({
      id: String(e.id),
      datetime: e.datetime,
      venue: e.venue?.name || "",
      // "New Orleans, LA" for US dates, "Paris, France" elsewhere.
      location:
        e.venue?.location ||
        [e.venue?.city, e.venue?.region || e.venue?.country]
          .filter(Boolean)
          .join(", "),
      url: e.url,
      soldOut: Boolean(e.sold_out),
    }));
  } catch {
    return [];
  }
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * "Sep 24" / "Jan 16" — the date as printed on the tour blade.
 *
 * Bandsintown datetimes are local *venue* time with no offset
 * ("2026-09-24T20:00:00"), so they're read off the string rather than through
 * Date, which would reinterpret them in the server's zone and shift late
 * shows onto the next day.
 */
export function showDay(datetime) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(datetime || ""));
  if (!m) return { month: "", day: "" };
  return {
    month: MONTHS[Number(m[2]) - 1] || "",
    day: String(Number(m[3])),
  };
}
