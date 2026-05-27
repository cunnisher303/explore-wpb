import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Psychology articles on personality, relationships, mental health, and behavior. Written for real people, not clinicians.",
};

// Latest posts — update this list as new blog posts are published on whypeoplebelieve.com
const posts = [
  {
    title: "Why You Repeat Patterns You Hate",
    slug: "why-you-repeat-patterns",
    excerpt: "The psychology behind self-sabotage, trauma bonding, and why knowing better rarely means doing better.",
    category: "Mental Health",
    color: "var(--blue)",
    date: "May 2026",
  },
  {
    title: "The Attachment Style Everyone Ignores",
    slug: "disorganized-attachment",
    excerpt: "Most people know about anxious and avoidant. Disorganized attachment is the one that explains the rest.",
    category: "Relationships",
    color: "var(--pink)",
    date: "May 2026",
  },
  {
    title: "What Your Cognitive Style Actually Tells You",
    slug: "cognitive-style-explained",
    excerpt: "It's not about how smart you are. It's about how your mind organizes the world — and why that shapes everything.",
    category: "Personality",
    color: "var(--primary)",
    date: "April 2026",
  },
  {
    title: "The Problem With Calling Someone a Narcissist",
    slug: "narcissist-label-problem",
    excerpt: "Labels explain behavior but they also end the conversation. Here's what we lose when we reach for the diagnosis.",
    category: "Mental Health",
    color: "var(--blue)",
    date: "April 2026",
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
