import Link from "next/link";
import Image from "next/image";
import { LeadMagnet } from "@/components/LeadMagnet";

const pillars = [
  { label: "Personality & Identity", color: "var(--primary)", desc: "Understand your cognitive patterns, self-concept, and what actually drives your behavior." },
  { label: "Romantic Relationships", color: "var(--pink)", desc: "Attachment styles, relationship patterns, and why you show up the way you do with others." },
  { label: "Personal Growth", color: "var(--teal)", desc: "Habit formation, journaling, and the psychology behind lasting change." },
  { label: "Mental Health", color: "var(--blue)", desc: "Anxiety, mindset, emotional regulation — without the clinical jargon." },
];

const workbooks = [
  {
    title: "The Quiet Equation",
    desc: "What introverts and extroverts actually get wrong about each other — and what the science really says. 12 chapters, real research, no agenda.",
    href: "https://whypeoplebelieve.gumroad.com/l/trjlpo",
    tag: "Personality",
    tagColor: "var(--primary)",
  },
  {
    title: "The Alpha Problem",
    desc: "The alpha framework was built on a debunked wolf study. This 12-chapter read tears apart what it's actually doing to the men running it.",
    href: "https://whypeoplebelieve.gumroad.com/l/ninmq",
    tag: "Masculinity",
    tagColor: "var(--pink)",
  },
];

const picks = [
  { title: "Attached", author: "Amir Levine & Rachel Heller", href: "https://www.amazon.com/s?k=Attached+Amir+Levine&tag=whypeoplebeli-20", topic: "Relationships" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", href: "https://www.amazon.com/s?k=Thinking+Fast+and+Slow+Kahneman&tag=whypeoplebeli-20", topic: "Personality" },
  { title: "Atomic Habits", author: "James Clear", href: "https://www.amazon.com/s?k=Atomic+Habits+James+Clear&tag=whypeoplebeli-20", topic: "Personal Growth" },
  { title: "Maybe You Should Talk to Someone", author: "Lori Gottlieb", href: "https://www.amazon.com/s?k=Maybe+You+Should+Talk+to+Someone&tag=whypeoplebeli-20", topic: "Mental Health" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-24 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/assets/logo-300.png"
            alt="Why People Believe"
            width={72}
            height={72}
            className="rounded-2xl mx-auto mb-6"
          />
          <div className="pill mb-6">Psychology for Real Life</div>
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-6">
            Understand why you<br />do what you do.
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-10">
            Workbooks, book recommendations, and a psychology app — all built around the patterns that actually run your life.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://whypeoplebelieve.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Try the App Free →
            </a>
            <Link href="/workbooks" className="btn-secondary">
              Browse Workbooks
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <p className="section-label mb-3">What We Cover</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">Four areas. One goal.</h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-lg mx-auto">Real self-understanding requires looking at all of it — not just the parts that feel comfortable.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div key={p.label} className="card card-hover p-6">
              <div className="w-2 h-2 rounded-full mb-4" style={{ background: p.color }} />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">{p.label}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workbooks */}
      <section className="bg-[var(--bg-card)] border-y border-[var(--border)] py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">Workbooks</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">Go deeper with guided work.</h2>
            </div>
            <Link href="/workbooks" className="text-sm text-[var(--primary)] hover:underline hidden md:block">
              See all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workbooks.map((w) => (
              <div key={w.title} className="card card-hover p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `color-mix(in srgb, ${w.tagColor} 15%, transparent)`, color: w.tagColor, border: `1px solid color-mix(in srgb, ${w.tagColor} 30%, transparent)` }}>
                    {w.tag}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Workbook</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{w.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-6">{w.desc}</p>
                <a href={w.href} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm justify-center">
                  Get Workbook →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book picks */}
      <section className="max-w-5xl mx-auto px-5 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-2">Book Picks</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">What we recommend reading.</h2>
          </div>
          <Link href="/picks" className="text-sm text-[var(--primary)] hover:underline hidden md:block">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {picks.map((b) => (
            <a key={b.title} href={b.href} target="_blank" rel="noopener noreferrer sponsored" className="card card-hover p-5 flex flex-col">
              <div className="w-10 h-14 rounded-md bg-[var(--bg-elevated)] mb-4 flex items-center justify-center text-xl">📖</div>
              <p className="text-xs text-[var(--text-muted)] mb-1">{b.topic}</p>
              <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-1 leading-snug">{b.title}</h3>
              <p className="text-xs text-[var(--text-muted)]">{b.author}</p>
              <p className="text-xs text-[var(--primary)] mt-auto pt-4">View on Amazon →</p>
            </a>
          ))}
        </div>
        <p className="affiliate-note mt-6 text-center">Links are Amazon affiliate links. We earn a small commission at no extra cost to you.</p>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* Channel */}
      <section className="bg-[var(--bg-card)] border-y border-[var(--border)] py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-3">The Channel</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">Psychology that actually makes sense.</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto">
            We break down why people believe what they believe — covering personality, relationships, mental health, and the hidden forces behind human behavior.
          </p>
          <Link href="/channel" className="btn-primary">
            Visit the Channel →
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-3xl mx-auto px-5 pb-2 text-center">
        <p className="text-xs text-[var(--text-muted)] italic">
          Content on this site is for educational purposes only and is not a substitute for professional psychological or medical advice.
        </p>
      </div>

      {/* App CTA */}
      <section className="max-w-3xl mx-auto px-5 py-24 text-center">
        <div className="pill mb-6">Free to Start</div>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Ready to understand yourself?
        </h2>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg mx-auto">
          The Why You app gives you a personalized psychology program — covering all four pillars — built around your specific patterns.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="https://whypeoplebelieve.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Try the App Free →
          </a>
          <Link href="/workbooks" className="btn-secondary">
            Browse Workbooks
          </Link>
        </div>
      </section>
    </div>
  );
}
