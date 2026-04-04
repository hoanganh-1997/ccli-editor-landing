"use client";

import { FadeIn } from "./fade-in";

const features = [
  {
    icon: "▓",
    title: "Terminal-first",
    desc: "Claude Code CLI runs as the primary interface. You type prompts, the agent writes code. No code editor getting in the way.",
  },
  {
    icon: "◉",
    title: "Visual diff review",
    desc: "See every change Claude made with colored diffs. Accept or revert per file with one click. No more reading raw git diff output.",
  },
  {
    icon: "⊞",
    title: "File tree + git status",
    desc: "Project explorer with real-time git indicators. Yellow for modified, green for new, red for deleted. Auto-refreshes on file changes.",
  },
  {
    icon: "◎",
    title: "Live browser preview",
    desc: "Embedded browser pointed at localhost. See UI changes as Claude Code makes them. No more switching windows.",
  },
  {
    icon: "⏱",
    title: "Session intelligence",
    desc: "Track every prompt, files changed, and token cost per session. Know exactly how much each feature costs in API calls.",
  },
  {
    icon: "⚡",
    title: "Built with Tauri v2",
    desc: "Rust backend, system webview. 20x smaller than Electron apps. Boots before your finger leaves the key.",
  },
];

function FeatureCard({
  icon,
  title,
  desc,
  delay,
}: {
  icon: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-surface border border-border rounded-[14px] p-7 transition-all duration-200 hover:border-amber/25 hover:-translate-y-0.5 group">
        <div className="text-[28px] mb-3.5 text-amber opacity-70 group-hover:opacity-100 transition-opacity">{icon}</div>
        <h3 className="text-[16px] font-semibold text-white mb-2 font-mono">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{desc}</p>
      </div>
    </FadeIn>
  );
}

export function Features() {
  return (
    <section className="max-w-[1100px] mx-auto mb-24 px-6">
      <FadeIn>
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-extrabold text-white font-mono tracking-tight">
            Everything the CLI needs.
            <br />
            <span className="text-amber">Nothing it doesn&apos;t.</span>
          </h2>
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
