import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-5D9HF0N2WY";

const title = "Desktop Editor for Claude Code CLI — CCLI Editor App";
const description =
  "A 10MB desktop app that wraps Claude Code CLI with a file tree, git diffs, and live preview. Built with Tauri v2. Free for macOS, Linux, and Windows.";
const url = "https://ccli-editor-landing.vercel.app";

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
        alt: "CCLI Editor — Desktop Editor for Claude Code CLI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
    creator: "@vn_andynguyen",
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
  alternates: {
    canonical: url,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "CCLI Editor",
                  url: url,
                },
                {
                  "@type": "SoftwareApplication",
                  name: "CCLI Editor",
                  url: url,
                  description:
                    "A lightweight desktop app that wraps Claude Code CLI with a file tree, git diffs, browser preview, and token tracking.",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "macOS, Linux, Windows",
                  downloadUrl:
                    "https://github.com/hoanganh-1997/ccli-editor-releases/releases/latest",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
