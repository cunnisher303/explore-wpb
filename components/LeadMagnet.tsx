"use client";

import Image from "next/image";
import { useState } from "react";

const books = [
  {
    id: "quiet-equation",
    title: "The Quiet Equation",
    desc: "Introverts vs. extroverts — what the science really says.",
    cover: "/assets/cover-quiet-equation.png",
    accent: "var(--primary)",
  },
  {
    id: "body-story",
    title: "The Body Follows the Story",
    desc: "Why fitness change fails, and what identity-based change looks like.",
    cover: "/assets/cover-body-follows-story.png",
    accent: "var(--teal)",
  },
  {
    id: "alpha-problem",
    title: "The Alpha Problem",
    desc: "The framework, its debunked origin, and the cost of running it.",
    cover: "/assets/cover-alpha-problem.png",
    accent: "var(--pink)",
  },
];

export function LeadMagnet() {
  const [selected, setSelected] = useState<string>("quiet-equation");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "already">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const chosen = books.find((b) => b.id === selected)!;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, book: selected }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
      } else if (data.error === "already_claimed") {
        setStatus("already");
        setErrorMsg(data.message || "You've already claimed a free ebook with this email.");
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

        {/* Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="section-label mb-3">Free Download</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
            Pick a book. We&apos;ll send it to your inbox.
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            One free ebook of your choice — yours for an email. No spam, unsubscribe anytime.
          </p>
        </div>

        {/* Book picker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {books.map((b) => {
            const isSelected = selected === b.id;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelected(b.id)}
                className="card text-left p-4 transition-all relative"
                style={{
                  borderColor: isSelected ? b.accent : undefined,
                  boxShadow: isSelected ? `0 0 0 1px ${b.accent}` : undefined,
                  background: isSelected ? `color-mix(in srgb, ${b.accent} 8%, var(--bg-elevated))` : undefined,
                }}
              >
                <div className="flex gap-4 items-start">
                  <div className="w-16 shrink-0 aspect-[2/3] rounded-md overflow-hidden border border-[var(--border)] bg-[var(--bg-base)]">
                    <Image
                      src={b.cover}
                      alt={b.title}
                      width={64}
                      height={96}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-tight">
                        {b.title}
                      </h3>
                      <div
                        className="w-4 h-4 rounded-full shrink-0 border-2 transition-all"
                        style={{
                          borderColor: isSelected ? b.accent : "var(--border)",
                          background: isSelected ? b.accent : "transparent",
                        }}
                      />
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-snug">{b.desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Submit form */}
        <div className="max-w-md mx-auto">
          {status === "success" ? (
            <div className="flex items-center gap-2.5 px-5 py-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-center">
              <span className="text-lg">✅</span>
              <p className="text-sm text-[var(--text-secondary)] text-left">
                <span className="font-semibold text-[var(--text-primary)]">Check your inbox.</span>{" "}
                <em>{chosen.title}</em> is on its way.
              </p>
            </div>
          ) : status === "already" ? (
            <div className="px-5 py-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <p className="text-sm text-[var(--text-secondary)] text-center mb-2">
                <span className="font-semibold text-[var(--text-primary)]">One free ebook per email.</span>
              </p>
              <p className="text-xs text-[var(--text-muted)] text-center">
                {errorMsg} Want another?{" "}
                <a href="https://whypeoplebelieve.gumroad.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                  Grab one on Gumroad for $12
                </a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
                style={{
                  background: chosen.accent,
                  boxShadow: `0 0 24px color-mix(in srgb, ${chosen.accent} 35%, transparent)`,
                }}
              >
                {status === "loading" ? "Sending…" : `Send ${chosen.title.split(" ").slice(0, 2).join(" ")} →`}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-xs text-red-400 mt-2 text-center">{errorMsg}</p>
          )}

          <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
            Want all three? Each is $12 on{" "}
            <a href="https://whypeoplebelieve.gumroad.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
              Gumroad
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
