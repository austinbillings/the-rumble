"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p className="form-success">
        Thanks, you're on the list. We'll be in touch with tour dates and new music.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="nl-email">Email address</label>
        <input
          id="nl-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
      </div>
      <button type="submit" className="btn btn--primary" disabled={status === "loading"}>
        {status === "loading" ? "Signing up…" : "Sign Up"}
      </button>
      {status === "error" && (
        <p className="form-note" style={{ color: "var(--crimson-bright)" }}>{error}</p>
      )}
      <p className="form-note">
        We respect your inbox. Updates, tour announcements, and new music only.
      </p>
    </form>
  );
}
