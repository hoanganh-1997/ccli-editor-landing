import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Logo size={20} />
        <span className="text-[13px] font-semibold text-muted font-mono">
          CCLI Editor
        </span>
      </div>
      <p className="text-xs text-dim">
        Built entirely with Claude Code CLI, in public.
      </p>
      <div className="flex gap-4 justify-center mt-3">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dim text-xs no-underline hover:text-muted transition-colors"
        >
          Twitter / X
        </a>
        <a
          href="https://github.com/hoanganh-1997/ccli-editor-releases/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dim text-xs no-underline hover:text-muted transition-colors"
        >
          Releases
        </a>
      </div>
    </footer>
  );
}
