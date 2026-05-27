import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Picks",
  description: "The best psychology books on personality, relationships, mental health, and personal growth — hand-picked and organized by topic.",
};

const TAG = "whypeoplebeli-20";

const categories = [
  {
    label: "Personality & Identity",
    color: "var(--primary)",
    books: [
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", desc: "The definitive book on cognitive biases and the two systems that drive how we think.", asin: "Thinking+Fast+and+Slow+Kahneman" },
      { title: "The Body Keeps the Score", author: "Bessel van der Kolk", desc: "How trauma reshapes body and mind — and the path to recovery.", asin: "The+Body+Keeps+the+Score+van+der+Kolk" },
      { title: "Man's Search for Meaning", author: "Viktor Frankl", desc: "A psychiatrist's account of surviving the Holocaust and finding purpose in suffering.", asin: "Man%27s+Search+for+Meaning+Frankl" },
      { title: "The Big Five Personality Test", author: "Multiple Authors", desc: "Understanding the five core traits that define personality across psychology research.", asin: "Big+Five+Personality+psychology" },
    ],
  },
  {
    label: "Romantic Relationships",
    color: "var(--pink)",
    books: [
      { title: "Attached", author: "Amir Levine & Rachel Heller", desc: "The definitive guide to attachment theory — anxious, avoidant, or secure. Essential reading.", asin: "Attached+Amir+Levine" },
      { title: "Hold Me Tight", author: "Sue Johnson", desc: "Emotionally focused couples therapy distilled into a book for everyday relationships.", asin: "Hold+Me+Tight+Sue+Johnson" },
      { title: "Wired for Love", author: "Stan Tatkin", desc: "How your nervous system shapes your relationship — and what to do about it.", asin: "Wired+for+Love+Stan+Tatkin" },
      { title: "The Seven Principles for Making Marriage Work", author: "John Gottman", desc: "Four decades of relationship research condensed into actionable principles.", asin: "Seven+Principles+Marriage+Gottman" },
    ],
  },
  {
    label: "Personal Growth",
    color: "var(--teal)",
    books: [
      { title: "Atomic Habits", author: "James Clear", desc: "The most practical book on building habits and breaking bad ones. Backed by research.", asin: "Atomic+Habits+James+Clear" },
      { title: "The Gifts of Imperfection", author: "Brené Brown", desc: "Letting go of who you think you should be and embracing who you are.", asin: "Gifts+of+Imperfection+Brene+Brown" },
      { title: "The Power of Now", author: "Eckhart Tolle", desc: "A guide to spiritual enlightenment grounded in present-moment awareness.", asin: "Power+of+Now+Eckhart+Tolle" },
      { title: "Untamed", author: "Glennon Doyle", desc: "A memoir about identity, self-trust, and reclaiming the life you actually want.", asin: "Untamed+Glennon+Doyle" },
    ],
  },
  {
    label: "Mental Health",
    color: "var(--blue)",
    books: [
      { title: "Maybe You Should Talk to Someone", author: "Lori Gottlieb", desc: "A therapist goes to therapy. One of the most human books on mental health ever written.", asin: "Maybe+You+Should+Talk+to+Someone+Gottlieb" },
      { title: "Lost Connections", author: "Johann Hari", desc: "The real causes of depression and anxiety — and the unexpected solutions.", asin: "Lost+Connections+Johann+Hari" },
      { title: "Feeling Good", author: "David D. Burns", desc: "The original cognitive behavioral therapy workbook. Still the best.", asin: "Feeling+Good+David+Burns" },
      { title: "The Anxiety and Worry Workbook", author: "Clark & Beck", desc: "Evidence-based CBT exercises for managing anxiety — practical and structured.", asin: "Anxiety+Worry+Workbook+Clark+Beck" },
    ],
  },
  {
    label: "Fitness & Mind-Body",
    color: "#A0E870",
    books: [
      { title: "Spark", author: "John J. Ratey", desc: "The revolutionary science of exercise and the brain. Why movement is medicine.", asin: "Spark+John+Ratey+exercise+brain" },
      { title: "Why We Sleep", author: "Matthew Walker", desc: "The most important book on sleep — and why it affects everything.", asin: "Why+We+Sleep+Matthew+Walker" },
      { title: "The Willpower Instinct", author: "Kelly McGonigal", desc: "Stanford psychologist breaks down self-control — what it is and how to build it.", asin: "Willpower+Instinct+Kelly+McGonigal" },
      { title: "Breath", author: "James Nestor", desc: "The new science of a lost art. How breathing affects your health, mood, and cognition.", asin: "Breath+James+Nestor" },
    ],
  },
];

export default function PicksPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="section-label mb-3">Book Picks</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">What we recommend reading.</h1>
        <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl">
          Hand-picked books organized by the four pillars of the Why You program — plus fitness and mind-body resources.
          Every book here is one we&apos;d genuinely recommend.
        </p>
        <p className="affiliate-note mt-3">
          Links are Amazon affiliate links. We earn a small commission at no extra cost to you — it helps keep this site running.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-16">
        {categories.map((cat) => (
          <section key={cat.label}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{cat.label}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cat.books.map((b) => (
                <a
                  key={b.title}
                  href={`https://www.amazon.com/s?k=${b.asin}&tag=${TAG}`}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="card card-hover p-5 flex flex-col"
                >
                  <div className="w-10 h-14 rounded-md bg-[var(--bg-elevated)] mb-4 flex items-center justify-center text-2xl">📖</div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-1 leading-snug">{b.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{b.author}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1">{b.desc}</p>
                  <p className="text-xs mt-4 pt-3 border-t border-[var(--border)]" style={{ color: cat.color }}>
                    View on Amazon →
                  </p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
