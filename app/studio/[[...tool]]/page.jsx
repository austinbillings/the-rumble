import { notFound } from "next/navigation";
import Studio from "./Studio";
import { projectId } from "../../../sanity/env";

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
  // Feature gate: without a configured Sanity project the Studio can only
  // render a client-side error, so hide the route entirely (404).
  if (!projectId) notFound();
  return <Studio />;
}
