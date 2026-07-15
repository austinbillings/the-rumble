import { NextResponse } from "next/server";

// Buttondown newsletter subscribe endpoint.
// Set BUTTONDOWN_API_KEY in .env.local (server-only; do NOT prefix with NEXT_PUBLIC).
export async function POST(request) {
  let email;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const key = process.env.BUTTONDOWN_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Newsletter is not configured yet." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email, tags: ["the-rumble-site"] }),
    });

    if (res.status === 200 || res.status === 201) {
      return NextResponse.json({ ok: true });
    }

    // Already subscribed -> treat as success for the visitor.
    const data = await res.json().catch(() => ({}));
    if (res.status === 400 && JSON.stringify(data).toLowerCase().includes("already")) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again later." },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { error: "Network error contacting the mailing list." },
      { status: 502 }
    );
  }
}
