"use client";

import { useState } from "react";

export default function NewsletterForm({ compact = false }) {
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot, see below
  const [error, setError] = useState("");
  // The blade renders on pages that may already have the full form, so ids must differ.
  const idPrefix = compact ? "nl-c" : "nl";

  async function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
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
    return <p className="form-success">You&rsquo;re on the list. Thanks.</p>;
  }

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? "nlform nlform--compact" : "nlform"}>
      <div className="field">
        <label htmlFor={`${idPrefix}-email`}>Email address</label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
      </div>
      {/* Honeypot: off-screen and skipped by keyboard/screen readers, so only
          bots that auto-fill every input will ever put a value here. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={`${idPrefix}-company`}>Company</label>
        <input
          id={`${idPrefix}-company`}
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn--primary" disabled={status === "loading"}>
        {status === "loading" ? "Signing up…" : "Sign Up"}
      </button>
      {status === "error" && (
        <p className="form-note" style={{ color: "var(--crimson-bright)" }}>{error}</p>
      )}
      {!compact && (
        <p className="form-note">
          Tour dates, new music, and announcements. Unsubscribe anytime.
        </p>
      )}
    </form>
  );
}
