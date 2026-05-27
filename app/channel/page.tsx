import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channel",
  description: "The Why People Believe YouTube channel — psychology videos on personality, relationships, mental health, and the hidden forces behind human behavior.",
};

// Replace CHANNEL_URL with your actual YouTube channel URL
const CHANNEL_URL = "https://www.youtube.com/channel/UCZijIKA4GOc5umi4axWF3ug";

// Add your video IDs here as you publish — get from youtube.com/watch?v=VIDEO_ID
const videos: { id: string; title: string; desc: string; category: string; color: string }[] = [
  // Example — replace with real video IDs:
  // { id: "dQw4w9WgXcQ", title: "Video Title", desc: "Short description.", category: "Personality", color: "var(--primary)" },
];

const topics = [
  { label: "Personality & Identity", color: "var(--primary)", desc: "Who you are, how you got that way, and what your patterns actually mean." },
  { label: "Romantic Relationships", color: "var(--pink)", desc: "Attachment styles, relationship dynamics, and why love is never just about love." },
  { label: "Mental Health", color: "var(--blue)", desc: "Anxiety, depression, trauma — explained without the clinical distance." },
  { label: "Personal Growth", color: "var(--teal)", desc: "Behavior change, habits, and why knowing better rarely means doing better." },
];

export default function ChannelPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      {/* Header */}
      <div className="mb-14 text-center max-w-2xl mx-auto">
        <p className="section-label mb-3">The Channel</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Why People Believe
        </h1>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
          We explore the psychology behind why people think, feel, and act the way they do.
          No agendas. No self-help clichés. Just the mechanisms underneath human behavior.
        </p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Subscribe on YouTube →
        </a>
      </div>

      {/* Videos — shown when available */}
      {videos.length > 0 && (
        <section className="mb-20">
          <p className="section-label mb-6">Latest Videos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {videos.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-video bg-[var(--bg-elevated)]">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/90 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                        <path d="M4 2l10 6-10 6V2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold" style={{ color: v.color }}>{v.category}</span>
                  <h3 className="font-bold text-[var(--text-primary)] mt-1 mb-2">{v.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{v.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Coming soon state */}
      {videos.length === 0 && (
        <div className="card p-10 text-center mb-20 border-dashed">
          <p className="text-3xl mb-4">🎬</p>
          <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2">Episodes dropping soon</h3>
          <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto mb-6">
            Subscribe to the channel so you don&apos;t miss the first episode.
          </p>
          <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
            Subscribe on YouTube →
          </a>
        </div>
      )}

      {/* Topics */}
      <section>
        <p className="section-label mb-6">What We Cover</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topics.map((t) => (
            <div key={t.label} className="card p-6">
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: t.color }} />
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">{t.label}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App CTA */}
      <div className="card p-8 text-center mt-12">
        <h3 className="font-bold text-[var(--text-primary)] text-lg mb-2">Want to go deeper?</h3>
        <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto mb-5">
          The Why You app turns the concepts from the channel into a personalized program built around your patterns.
        </p>
        <a href="https://whypeoplebelieve.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-sm">
          Try the App Free →
        </a>
      </div>
    </div>
  );
}
