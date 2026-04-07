import { FadeIn } from "./fade-in";

const steps = [
  { label: "Write a prompt", icon: "▓" },
  { label: "See the diff", icon: "◉" },
  { label: "Preview in browser", icon: "◎" },
  { label: "Push to git", icon: "⑂" },
];

export function Hero() {
  return (
    <section className="pt-[140px] pb-24 text-center relative overflow-hidden">
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
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse,_rgba(217,119,6,0.06)_0%,_transparent_70%)]" />

      <div className="relative max-w-[900px] mx-auto px-6">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-8 text-[13px] text-amber font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
            Building in public
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-[clamp(32px,5.5vw,56px)] font-extrabold font-mono leading-[1.1] tracking-tighter text-white mb-4">
            One window for your entire
            <br />
            <span className="text-amber">Claude Code workflow.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg text-muted max-w-[520px] mx-auto mb-10 leading-relaxed">
            File tree, git tools, browser preview, code editor, diff viewer,
            token tracking, and conversation history — wrapped around Claude
            Code CLI in one 10MB app.
          </p>
        </FadeIn>

        {/* Workflow steps */}
        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex items-center gap-2.5 bg-surface border border-border rounded-[10px] px-4 py-2.5 group hover:border-amber/30 transition-colors">
                  <span className="text-amber/70 text-[16px] group-hover:text-amber transition-colors">
                    {step.icon}
                  </span>
                  <span className="text-[13px] text-white font-mono font-medium">
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-amber/30 text-[14px] font-mono hidden sm:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] bg-amber text-bg text-[15px] font-bold font-mono no-underline hover:opacity-85 transition-opacity"
            >
              Get early access — it&apos;s free
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

        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-6 mt-10 text-[13px] text-dim font-mono">
            <span>~10MB</span>
            <span className="text-border">·</span>
            <span>Boots in &lt;1s</span>
            <span className="text-border">·</span>
            <span>~50MB RAM</span>
            <span className="text-border">·</span>
            <span>macOS</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
