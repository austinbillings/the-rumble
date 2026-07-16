import Studio from "./Studio";

// Keep the Sanity Studio (styled-components etc.) out of the server-component
// graph — it only renders client-side.
export const dynamic = "force-static";

export const metadata = {
  title: "Sanity Studio · The Rumble",
  robots: { index: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function StudioPage() {
  return <Studio />;
}
