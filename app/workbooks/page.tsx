import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Workbooks",
  description: "Psychology workbooks for real self-understanding. Guided exercises on introversion, identity, mental health labels, and more.",
};

const workbooks = [
  {
    title: "The Body Follows the Story",
    tag: "Personal Growth",
    tagColor: "var(--teal)",
    href: null,
    cover: "/assets/cover-body-follows-story.png",
    description: "Why you become what you believe about yourself — and how to change the belief. A 12-chapter psychology read on fitness, identity, and the loops that keep you stuck.",
    whatYouGet: [
      "Why motivation can't bridge to habit — and what actually can",
      "Self-perception theory: how identity quietly drives behavior",
      "Why 'discipline' is a lie (and what fit people are actually doing)",
      "How the body holds story — and what happens when you try to outwork it",
      "The 60-day identity shift that makes change automatic",
    ],
    forYouIf: "You've tried programs, fallen off, and felt like you just can't stay consistent. The problem isn't your willpower. It's the story underneath.",
  },
  {
    title: "The Quiet Equation",
    tag: "Personality & Identity",
    tagColor: "var(--primary)",
    href: "https://whypeoplebelieve.gumroad.com/l/trjlpo",
    cover: "/assets/cover-quiet-equation.png",
    description: "You've been told introverts are shy and extroverts are loud. The science tells a different story. This 12-chapter read unpacks the real psychology — through two characters, real research, and zero agenda.",
    whatYouGet: [
      "The neurological difference between introverts and extroverts (it's dopamine, not personality)",
      "What each type gets completely wrong about the other",
      "How these differences play out in relationships, work, and parenting",
      "Why the digital age quietly rewards one type over the other",
      "What changes when you stop fighting your wiring",
    ],
    forYouIf: "You've ever felt out of place in a room, drained after a 'good' night, or wired differently from the people around you — and wanted a real explanation instead of a personality quiz.",
  },
  {
    title: "The Introvert Myth",
    tag: "Personality & Identity",
    tagColor: "var(--primary)",
    href: "https://whypeoplebelieve.gumroad.com/l/bqvsfw",
    cover: null,
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
    cover: null,
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
                <div className="w-full aspect-[3/4] rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center mb-4 overflow-hidden">
                  {w.cover ? (
                    <Image src={w.cover} alt={w.title} width={192} height={256} className="w-full h-full object-cover" />
                  ) : (
                    <Image src="/assets/icon-1080.png" alt="Why People Believe" width={160} height={160} className="rounded-xl" />
                  )}
                </div>
                {w.href ? (
                  <>
                    <a href={w.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm">
                      Get Workbook →
                    </a>
                    <p className="text-xs text-[var(--text-muted)] text-center mt-2">Available on Gumroad</p>
                  </>
                ) : (
                  <>
                    <div className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-center text-sm text-[var(--text-secondary)]">
                      Coming Soon
                    </div>
                    <p className="text-xs text-[var(--text-muted)] text-center mt-2">Releasing this week</p>
                  </>
                )}
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
