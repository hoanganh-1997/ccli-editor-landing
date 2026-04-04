import { FadeIn } from "./fade-in";

const steps = [
  { n: "01", title: "Open your project", desc: "Launch CCLI Editor, pick a folder. The file tree loads instantly with git status." },
  { n: "02", title: "Talk to Claude Code", desc: "Type prompts in the terminal. Claude Code reads your codebase, plans changes, and executes." },
  { n: "03", title: "Review the diffs", desc: "Every changed file appears in the diff viewer. Green for additions, red for deletions. Accept or revert each file." },
  { n: "04", title: "Preview the result", desc: "The embedded browser shows your UI at localhost. See what changed without leaving the app." },
];

export function Workflow() {
  return (
    <section className="max-w-[700px] mx-auto mb-24 px-6">
      <FadeIn>
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-extrabold text-white font-mono tracking-tight">
            The workflow
          </h2>
        </div>
      </FadeIn>
      {steps.map((step, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <div
            className={`flex gap-5 items-start mb-8 p-5 rounded-xl transition-colors ${
              i === 0
                ? "bg-amber/[0.04] border border-amber/10"
                : "border border-transparent"
            }`}
          >
            <div
              className={`font-mono text-2xl font-extrabold leading-none min-w-[40px] ${
                i === 0 ? "text-amber" : "text-dim"
              }`}
            >
              {step.n}
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-white mb-1 font-mono">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
