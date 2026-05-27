import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workbooks",
  description: "Psychology workbooks for real self-understanding. Guided exercises on introversion, identity, mental health labels, and more.",
};

const workbooks = [
  {
    title: "The Introvert Myth",
    tag: "Personality & Identity",
    tagColor: "var(--primary)",
    href: "https://whypeoplebelieve.gumroad.com/l/bqvsfw",
    description: "Most of what you've been told about introversion is wrong. It's not about being shy. It's not about hating people. And it's definitely not a flaw to fix.",
    whatYouGet: [
      "The real psychology behind introversion vs. extroversion",
      "Why introvert traits are often mislabeled as social anxiety or aloofness",
      "Guided exercises to understand your actual energy patterns",
      "How to stop apologizing for the way you're wired",
    ],
    forYouIf: "You've ever felt like something was wrong with you for needing alone time, preferring depth over small talk, or finding social situations draining.",
  },
  {
    title: "The Label Trap",
    tag: "Mental Health",
    tagColor: "var(--blue)",
    href: "https://whypeoplebelieve.gumroad.com/l/xuvsi",
    description: "Anxiety. Depression. Narcissist. Borderline. We diagnose ourselves and each other constantly — often without realizing what labels actually do to our thinking.",
    whatYouGet: [
      "How diagnostic labels shape (and distort) self-perception",
      "The difference between a useful framework and a ceiling",
      "Why we label others — and what it costs us",
      "Exercises to separate your experience from the story you've built around it",
    ],
    forYouIf: "You've ever defined yourself by a diagnosis, used a label to explain away behavior, or felt like a psychological category was limiting rather than helping.",
  },
];

export default function WorkbooksPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="section-label mb-3">Workbooks</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Go deeper with guided work.</h1>
        <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl">
          Each workbook pairs psychology research with real exercises — so you don&apos;t just learn about yourself, you actually do something with it.
        </p>
      </div>

      {/* Workbooks */}
      <div className="space-y-8">
        {workbooks.map((w) => (
          <div key={w.title} className="card p-8">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `color-mix(in srgb, ${w.tagColor} 15%, transparent)`, color: w.tagColor, border: `1px solid color-mix(in srgb, ${w.tagColor} 30%, transparent)` }}>
                    {w.tag}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">Workbook — PDF</span>
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{w.title}</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{w.description}</p>

                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">What&apos;s inside</p>
                <ul className="space-y-2 mb-6">
                  {w.whatYouGet.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: w.tagColor }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-[var(--bg-elevated)] rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold text-[var(--text-muted)] mb-1">This is for you if…</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{w.forYouIf}</p>
                </div>
              </div>

              <div className="md:w-48 shrink-0">
                <div className="w-full aspect-[3/4] rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center mb-4 text-4xl">
                  📘
                </div>
                <a href={w.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm">
                  Get Workbook →
                </a>
                <p className="text-xs text-[var(--text-muted)] text-center mt-2">Available on Gumroad</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More coming */}
      <div className="card p-8 text-center mt-8 border-dashed">
        <p className="text-2xl mb-3">🔜</p>
        <h3 className="font-semibold text-[var(--text-primary)] mb-2">More workbooks coming soon</h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
          We&apos;re building workbooks for attachment styles, habit psychology, and more. Try the app to explore related content now.
        </p>
        <a href="https://whypeoplebelieve.com" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex mt-5 text-sm">
          Try the App Free →
        </a>
      </div>
    </div>
  );
}
