import { FadeIn } from "./fade-in";

const rows = [
  {
    label: "Raw Claude Code CLI",
    gap: "No file tree, no diffs, no browser preview, no git UI, no token tracking, no conversation history",
  },
  {
    label: "Cursor / VS Code",
    gap: "150-200MB+, designed for human coding — not built around the Claude Code workflow",
  },
  {
    label: "Claude.ai web",
    gap: "No file access, no git, no terminal — not a development environment",
  },
];

export function Comparison() {
  return (
    <section className="max-w-[900px] mx-auto mb-24 px-6">
      <FadeIn>
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-extrabold text-white font-mono tracking-tight">
            Built for the Claude Code workflow
          </h2>
          <p className="text-muted text-[15px] mt-2 max-w-[520px] mx-auto">
            It&apos;s not an IDE. It doesn&apos;t replace Claude. It gives
            Claude Code CLI the visual environment it was missing.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="space-y-3">
          {rows.map((row) => (
            <div
              key={row.label}
              className="bg-surface border border-border rounded-[14px] p-6 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="sm:w-[200px] flex-shrink-0">
                <span className="text-[14px] font-semibold text-white font-mono">
                  {row.label}
                </span>
              </div>
              <div className="hidden sm:block text-dim text-lg">→</div>
              <p className="text-sm text-muted leading-relaxed">{row.gap}</p>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="mt-6 text-center">
          <p className="text-[13px] text-dim font-mono">
            CCLI Editor fills all three gaps in one 10MB app.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
