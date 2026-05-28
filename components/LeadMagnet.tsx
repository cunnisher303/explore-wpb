"use client";

import Image from "next/image";
import { useState } from "react";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-[var(--bg-card)] border-y border-[var(--border)] py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Cover image */}
          <div className="shrink-0 w-44 md:w-52">
            <div className="aspect-[2/3] rounded-xl overflow-hidden border border-[var(--border)] shadow-lg shadow-black/40">
              <Image
                src="/assets/cover-quiet-equation.png"
                alt="The Quiet Equation"
                width={208}
                height={312}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="section-label mb-3">Free Download</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
              Get <span style={{ color: "var(--primary)" }}>The Quiet Equation</span> free.
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-lg">
              A 12-chapter psychology read on what introverts and extroverts actually get wrong about each other. Enter your email and we&apos;ll send it straight to your inbox.
            </p>

            {status === "success" ? (
              <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
                <span className="text-lg">✅</span>
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">Check your inbox.</span> The ebook is on its way.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary text-sm shrink-0"
                >
                  {status === "loading" ? "Sending…" : "Send It Free →"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="text-xs text-red-400 mt-2">{errorMsg}</p>
            )}

            <p className="text-xs text-[var(--text-muted)] mt-3">
              No spam. Unsubscribe anytime. Or <a href="https://whypeoplebelieve.gumroad.com/l/trjlpo" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">grab it for $12 on Gumroad</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
