import type { Metadata } from "next";
import "./globals.css";

const title = "CCLI Editor — A Lightweight Cockpit for Claude Code CLI";
const description =
  "A 10MB desktop app that wraps Claude Code CLI with a file tree, git diffs, and live preview. See what the AI agent did without opening a full IDE. Built with Tauri v2.";
const url = "https://ccli-editor.vercel.app";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Claude Code",
    "CLI editor",
    "AI coding",
    "Tauri",
    "lightweight IDE",
    "git diff viewer",
    "developer tools",
    "indie hacker",
    "terminal editor",
    "Claude Code CLI",
    "AI cockpit",
  ],
  authors: [{ name: "Hoang Anh" }],
  creator: "Hoang Anh",
  metadataBase: new URL(url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    title,
    description,
    siteName: "CCLI Editor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CCLI Editor — Lightweight Cockpit for Claude Code CLI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={url} />
      </head>
      <body>{children}</body>
    </html>
  );
}
