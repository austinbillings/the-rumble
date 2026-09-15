import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";

// Mailing-list subscribe endpoint.
// Every signup is saved to Sanity as a `subscriber` document (needs
// SANITY_API_WRITE_TOKEN). If BUTTONDOWN_API_KEY is also set, it's forwarded
// there too. Both are server-only env vars: do NOT prefix with NEXT_PUBLIC.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: the hidden `company` field is only ever filled in by bots.
  // Pretend it worked so they don't retry, but store nothing.
  if (body?.company) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const buttondownKey = process.env.BUTTONDOWN_API_KEY;
  if (!writeClient && !buttondownKey) {
    return NextResponse.json(
      { error: "The mailing list is not configured yet." },
      { status: 500 }
    );
  }

  const results = await Promise.all([
    writeClient ? saveToSanity(email) : false,
    buttondownKey ? sendToButtondown(email, buttondownKey) : false,
  ]);

  // Landing in either place counts: the visitor is on the list.
  if (results.some(Boolean)) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json(
    { error: "Could not subscribe right now. Please try again later." },
    { status: 502 }
  );
}

async function saveToSanity(email) {
  const hash = createHash("sha256").update(email).digest("hex");
  try {
    // createIfNotExists: signing up twice keeps the original signup date.
    await writeClient.createIfNotExists({
      _id: `subscriber.${hash}`,
      _type: "subscriber",
      email,
      source: "website",
      subscribedAt: new Date().toISOString(),
    });
    return true;
  } catch (err) {
    console.error("[subscribe] Sanity write failed:", err.statusCode, err.message);
    return false;
  }
}

async function sendToButtondown(email, key) {
  try {
    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, tags: ["the-rumble-site"] }),
    });
    if (res.status === 200 || res.status === 201) return true;

    // Already subscribed -> treat as success for the visitor.
    const data = await res.json().catch(() => ({}));
    if (res.status === 400 && JSON.stringify(data).toLowerCase().includes("already")) {
      return true;
    }
    console.error("[subscribe] Buttondown rejected signup:", res.status);
    return false;
  } catch (err) {
    console.error("[subscribe] Buttondown request failed:", err.message);
    return false;
  }
}
