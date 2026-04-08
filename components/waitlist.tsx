import { FadeIn } from "./fade-in";

const DOWNLOAD_URL =
  "https://github.com/hoanganh-1997/ccli-editor-releases/releases/latest";

export function Waitlist() {
  return (
    <section id="download" className="max-w-[600px] mx-auto mb-24 px-6">
      <FadeIn>
        <div className="bg-surface rounded-2xl border border-border p-12 text-center">
          <h2 className="text-2xl font-extrabold text-white font-mono mb-2 tracking-tight">
            Your Claude Code workflow, complete.
          </h2>
          <p className="text-muted text-sm mb-7 max-w-[420px] mx-auto">
            Terminal, file tree, git, preview, editor, token tracking, and
            history — in one window. Stop context switching. Start shipping.
          </p>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[10px] bg-amber text-bg text-[16px] font-bold font-mono no-underline hover:opacity-85 transition-opacity"
          >
            Download on GitHub — it&apos;s free
          </a>

          <div className="flex items-center justify-center gap-4 mt-5 text-[12px] text-dim font-mono">
            <span>Free</span>
            <span className="text-border">·</span>
            <span>No account required</span>
            <span className="text-border">·</span>
            <span>macOS · Linux · Windows</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
