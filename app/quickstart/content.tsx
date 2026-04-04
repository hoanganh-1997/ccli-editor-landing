"use client";

import { FadeIn } from "@/components/fade-in";

const steps = [
  {
    title: "Install prerequisites",
    code: `# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Node.js 18+ (if not installed)
brew install node

# Install Tauri CLI
cargo install tauri-cli --version "^2"

# macOS: Install Xcode Command Line Tools
xcode-select --install`,
  },
  {
    title: "Clone and setup",
    code: `git clone https://github.com/your-username/ccli-editor.git
cd ccli-editor
chmod +x setup.sh && ./setup.sh`,
  },
  {
    title: "Run in development",
    code: `cargo tauri dev`,
  },
  {
    title: "Build for production",
    code: `cargo tauri build

# Output:
# macOS:   target/release/bundle/dmg/
# Linux:   target/release/bundle/appimage/
# Windows: target/release/bundle/msi/`,
  },
];

const shortcuts = [
  ["Cmd+1", "Focus file tree"],
  ["Cmd+2", "Focus terminal"],
  ["Cmd+3", "Focus diff / preview"],
  ["Cmd+D", "Toggle diff viewer"],
  ["Cmd+P", "Toggle browser preview"],
  ["Cmd+Enter", "Accept all changes"],
  ["Cmd+Z", "Revert last change"],
  ["Cmd+K", "Clear terminal"],
];

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-surface rounded-[10px] border border-border p-4 overflow-auto">
      <pre className="text-[13px] text-muted font-mono leading-[1.7] whitespace-pre-wrap m-0">
        {code}
      </pre>
    </div>
  );
}

export function QuickstartContent() {
  return (
    <section className="pt-24 max-w-[720px] mx-auto px-6 pb-20">
      <FadeIn>
        <h1 className="text-[32px] font-extrabold text-white font-mono tracking-tight mb-2">
          Quickstart guide
        </h1>
        <p className="text-muted text-[15px] mb-12 leading-relaxed">
          Get CCLI Editor running on your machine in under 5 minutes. Works on
          macOS, Linux, and Windows.
        </p>
      </FadeIn>

      {/* Installation steps */}
      {steps.map((step, i) => (
        <FadeIn key={i} delay={i * 0.08}>
          <div className="mb-9">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg bg-amber/10 flex items-center justify-center text-[13px] font-bold text-amber font-mono">
                {i + 1}
              </div>
              <h3 className="text-[16px] font-semibold text-white font-mono">
                {step.title}
              </h3>
            </div>
            <CodeBlock code={step.code} />
          </div>
        </FadeIn>
      ))}

      {/* Claude Code integration */}
      <FadeIn delay={0.3}>
        <div className="bg-amber/[0.04] border border-amber/10 rounded-xl p-5 mt-10">
          <h3 className="text-[15px] font-semibold text-amber font-mono mb-2">
            Using with Claude Code CLI
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-3">
            CCLI Editor works best with Claude Code CLI installed globally:
          </p>
          <div className="bg-surface rounded-lg p-3 border border-border">
            <code className="text-amber text-[13px] font-mono">
              npm install -g @anthropic-ai/claude-code
            </code>
          </div>
          <p className="text-dim text-[13px] mt-3">
            Once installed, CCLI Editor automatically spawns Claude Code in the
            terminal panel when you open a project.
          </p>
        </div>
      </FadeIn>

      {/* Keyboard shortcuts */}
      <FadeIn delay={0.35}>
        <div className="mt-12 p-5 bg-surface rounded-xl border border-border">
          <h3 className="text-[15px] font-semibold text-white font-mono mb-3">
            Keyboard shortcuts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-[13px]">
            {shortcuts.map(([key, desc], i) => (
              <div
                key={i}
                className="flex justify-between items-center py-1"
              >
                <span className="text-muted">{desc}</span>
                <code className="bg-surface-2 px-2 py-0.5 rounded text-xs text-white font-mono border border-border">
                  {key}
                </code>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Claude Code workflow */}
      <FadeIn delay={0.4}>
        <div className="mt-12 p-5 bg-surface rounded-xl border border-border">
          <h3 className="text-[15px] font-semibold text-white font-mono mb-3">
            Built-in slash commands
          </h3>
          <p className="text-muted text-sm mb-4 leading-relaxed">
            CCLI Editor ships with Claude Code slash commands for streamlined
            workflows:
          </p>
          <div className="space-y-2 text-[13px]">
            {[
              ["/resume", "Pick up where you left off"],
              ["/implement", "Work on a specific task from the plan"],
              ["/understand", "Get a codebase overview"],
              ["/build-check", "Verify Rust + frontend compilation"],
              ["/ship", "Generate X/Twitter posts for shipped features"],
              ["/eod", "Log progress and update the plan"],
            ].map(([cmd, desc], i) => (
              <div key={i} className="flex gap-3 items-baseline">
                <code className="text-amber font-mono font-semibold min-w-[120px]">
                  {cmd}
                </code>
                <span className="text-muted">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* System requirements */}
      <FadeIn delay={0.45}>
        <div className="mt-12 p-5 bg-surface rounded-xl border border-border">
          <h3 className="text-[15px] font-semibold text-white font-mono mb-3">
            System requirements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px]">
            <div>
              <div className="text-amber font-semibold mb-1.5">macOS</div>
              <div className="text-muted leading-relaxed">
                macOS 11+
                <br />
                Xcode CLT
                <br />
                Rust, Node.js 18+
              </div>
            </div>
            <div>
              <div className="text-amber font-semibold mb-1.5">Linux</div>
              <div className="text-muted leading-relaxed">
                Ubuntu 22.04+
                <br />
                libwebkit2gtk-4.1-dev
                <br />
                Rust, Node.js 18+
              </div>
            </div>
            <div>
              <div className="text-amber font-semibold mb-1.5">Windows</div>
              <div className="text-muted leading-relaxed">
                Windows 10+
                <br />
                WebView2 (pre-installed)
                <br />
                Rust, Node.js 18+
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
