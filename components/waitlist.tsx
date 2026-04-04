"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email.includes("@") || !email.includes(".")) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="max-w-[600px] mx-auto mb-24 px-6">
      <FadeIn>
        <div className="bg-surface rounded-2xl border border-border p-12 text-center">
          <h2 className="text-2xl font-extrabold text-white font-mono mb-2 tracking-tight">
            Get early access
          </h2>
          <p className="text-muted text-sm mb-7">
            Join the waitlist. Be first to know when CCLI Editor launches.
          </p>

          {submitted ? (
            <div className="py-6">
              <div className="text-3xl mb-3 text-amber">✓</div>
              <p className="text-[16px] text-white font-medium">
                You&apos;re on the list.
              </p>
              <p className="text-sm text-muted mt-1.5">
                We&apos;ll notify you when CCLI Editor launches.
              </p>
            </div>
          ) : (
            <div className="flex gap-2 max-w-[460px] mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="flex-1 px-4 py-3 rounded-[10px] bg-surface border border-border text-white text-sm font-mono outline-none focus:border-amber transition-colors placeholder:text-dim"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-3 rounded-[10px] bg-amber text-bg text-sm font-bold font-mono hover:opacity-85 transition-opacity disabled:opacity-50"
              >
                {loading ? "..." : "Join waitlist"}
              </button>
            </div>
          )}

          {error && (
            <p className="text-red-400 text-sm mt-3">{error}</p>
          )}

          <p className="text-dim text-xs mt-4">
            Free and open source. No spam, ever.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
