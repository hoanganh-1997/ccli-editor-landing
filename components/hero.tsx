import { FadeIn } from "./fade-in";

export function Hero() {
  return (
    <section className="pt-[140px] pb-20 text-center relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#d97706 1px, transparent 1px), linear-gradient(90deg, #d97706 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse,_rgba(217,119,6,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-7 text-[13px] text-amber font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            Now building in public
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-[clamp(36px,6vw,64px)] font-extrabold font-mono leading-[1.1] tracking-tighter text-white mb-5">
            Cursor is an editor
            <br />
            that added AI.
            <br />
            <span className="text-amber">This is an AI cockpit</span>
            <br />
            that skipped the editor.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-muted max-w-[520px] mx-auto mb-9 leading-relaxed">
            A 10MB desktop app that wraps Claude Code CLI with a file tree, git
            diffs, and live preview. See what the agent did without opening a
            full IDE.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-amber text-bg text-[15px] font-bold font-mono no-underline hover:opacity-85 transition-opacity"
            >
              Join the waitlist
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] border border-border bg-transparent text-white text-[15px] font-medium font-mono no-underline hover:border-muted transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
