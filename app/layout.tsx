import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const APP_URL = "https://explore.whypeoplebelieve.com";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Why People Believe — Explore",
    template: "%s | Why People Believe",
  },
  description:
    "Psychology resources, workbooks, book recommendations, and tools to help you understand why you think, feel, and act the way you do.",
  keywords: [
    "psychology", "self improvement", "attachment theory", "personality",
    "mental health", "relationships", "self awareness", "behavior change",
    "psychology books", "workbooks",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    siteName: "Why People Believe",
    title: "Why People Believe — Explore",
    description: "Psychology resources, workbooks, and tools for real self-understanding.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
