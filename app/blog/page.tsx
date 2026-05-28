import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Psychology articles on personality, relationships, mental health, and behavior. Written for real people, not clinicians.",
};

const posts = [
  {
    title: "Marriage, Cohabitation, or Situationship: Which One Actually Lasts?",
    slug: "marriage-cohabitation-situationship-psychology",
    excerpt: "The psychology behind commitment, avoidance, and why the structure of a relationship shapes how long it survives.",
    category: "Relationships",
    color: "var(--pink)",
    date: "May 22, 2026",
    readTime: "9 min",
  },
  {
    title: "You're Probably Not an Introvert: What the Psychology Actually Says",
    slug: "are-you-really-an-introvert",
    excerpt: "The word gets thrown around constantly. The actual science is more specific — and more interesting.",
    category: "Personality",
    color: "var(--primary)",
    date: "May 22, 2026",
    readTime: "7 min",
  },
  {
    title: "Alpha, Beta, Sigma: Why Personality Labels Are Failing You",
    slug: "alpha-beta-sigma-personality-labels",
    excerpt: "The internet loves these categories. Psychology doesn't. Here's why the framework breaks down — and what to use instead.",
    category: "Personality",
    color: "var(--primary)",
    date: "May 20, 2026",
    readTime: "6 min",
  },
  {
    title: "The Dark Empath: When Understanding Becomes a Weapon",
    slug: "the-dark-empath",
    excerpt: "Empathy isn't always a virtue. The dark empath uses emotional intelligence to manipulate — and they're harder to spot than narcissists.",
    category: "Personality",
    color: "var(--primary)",
    date: "May 15, 2026",
    readTime: "6 min",
  },
  {
    title: "What's Your Attachment Style? The Four Patterns Explained",
    slug: "what-is-your-attachment-style",
    excerpt: "Secure, anxious, avoidant, disorganized — your attachment pattern shapes every relationship you have. Here's how to identify yours.",
    category: "Relationships",
    color: "var(--pink)",
    date: "May 10, 2026",
    readTime: "7 min",
  },
  {
    title: "Identity Over Motivation: The 60-Day Switch That Makes Fitness Automatic",
    slug: "identity-shift-60-days-to-athlete",
    excerpt: "Motivation runs out. Identity doesn't. The psychology of why who you think you are determines whether habits stick.",
    category: "Personal Growth",
    color: "var(--teal)",
    date: "May 22, 2026",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="section-label mb-3">Blog</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Psychology that doesn&apos;t talk down to you.</h1>
        <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl">
          Articles on personality, relationships, mental health, and the hidden forces behind human behavior. Research-backed, clearly written.
        </p>
      </div>

      {/* Posts */}
      <div className="space-y-5">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`https://whypeoplebelieve.com/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover p-6 flex flex-col md:flex-row md:items-center gap-5 block"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `color-mix(in srgb, ${post.color} 15%, transparent)`, color: post.color, border: `1px solid color-mix(in srgb, ${post.color} 30%, transparent)` }}>
                  {post.category}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{post.date}</span>
                <span className="text-xs text-[var(--text-muted)]">· {post.readTime} read</span>
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">{post.title}</h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{post.excerpt}</p>
            </div>
            <div className="text-sm text-[var(--primary)] shrink-0">Read →</div>
          </a>
        ))}
      </div>

      {/* CTA to full blog */}
      <div className="text-center mt-12">
        <a
          href="https://whypeoplebelieve.com/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex"
        >
          View All Posts →
        </a>
      </div>
    </div>
  );
}
