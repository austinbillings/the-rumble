"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState("idle"); // idle | done
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    // No backend wired up yet, capture intent and confirm to the visitor.
    if (!email) return;
    setStatus("done");
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
        />
      </div>
      <button type="submit" className="btn btn--primary">Sign Up</button>
      <p className="form-note">
        We respect your inbox. Updates, tour announcements, and new music only.
      </p>
    </form>
  );
}
