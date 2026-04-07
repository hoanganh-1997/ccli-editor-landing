"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/lib/hooks";
import { FadeIn } from "./fade-in";

const fileTree = [
  { depth: 0, name: ".claude", type: "folder", open: false },
  { depth: 0, name: "src", type: "folder", open: true },
  { depth: 1, name: "components", type: "folder", open: true },
  { depth: 2, name: "Button.tsx", type: "file", icon: "TX", color: "text-blue-400" },
  { depth: 2, name: "Header.tsx", type: "file", icon: "TX", color: "text-blue-400", status: "modified" as const },
  { depth: 2, name: "Sidebar.tsx", type: "file", icon: "TX", color: "text-blue-400" },
  { depth: 1, name: "hooks", type: "folder", open: false },
  { depth: 1, name: "pages", type: "folder", open: true },
  { depth: 2, name: "Dashboard.tsx", type: "file", icon: "TX", color: "text-blue-400", status: "modified" as const },
  { depth: 2, name: "Settings.tsx", type: "file", icon: "TX", color: "text-blue-400" },
  { depth: 1, name: "lib", type: "folder", open: true },
  { depth: 2, name: "api.ts", type: "file", icon: "TS", color: "text-cyan-400" },
  { depth: 2, name: "auth.ts", type: "file", icon: "TS", color: "text-cyan-400", status: "added" as const },
  { depth: 1, name: "styles", type: "folder", open: false },
  { depth: 0, name: "public", type: "folder", open: false },
  { depth: 0, name: "package.json", type: "file", icon: "{}", color: "text-yellow-500" },
  { depth: 0, name: "tsconfig.json", type: "file", icon: "{}", color: "text-yellow-500" },
  { depth: 0, name: "CLAUDE.md", type: "file", icon: "MD", color: "text-zinc-400" },
];

const terminalLines = [
  { type: "blank" },
  { type: "prompt", text: "Add authentication with JWT to the login page" },
  { type: "blank" },
  { type: "text", text: "  I'll add JWT authentication. Here's my plan:", cls: "text-zinc-400" },
  { type: "blank" },
  { type: "text", text: "  1. Create auth utility with token helpers", cls: "text-zinc-500" },
  { type: "text", text: "  2. Add login form with validation", cls: "text-zinc-500" },
  { type: "text", text: "  3. Update Dashboard with auth guard", cls: "text-zinc-500" },
  { type: "blank" },
  { type: "text", text: "  ✓ Created src/lib/auth.ts", cls: "text-green-500" },
  { type: "text", text: "  ✓ Modified src/components/Header.tsx", cls: "text-green-500" },
  { type: "text", text: "  ✓ Modified src/pages/Dashboard.tsx", cls: "text-green-500" },
  { type: "blank" },
  { type: "text", text: "  ⟡ 2,341 tokens · $0.007 · 3.2s", cls: "text-zinc-600" },
];

export function TerminalDemo() {
  const [rightTab, setRightTab] = useState("changes");
  const [visibleLines, setVisibleLines] = useState(0);
  const [ref, visible] = useInView(0.2);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= terminalLines.length) clearInterval(id);
    }, 120);
    return () => clearInterval(id);
  }, [visible]);

  const panelBg = "#1a1b2e";
  const headerBg = "#1e1f35";

  return (
    <section className="max-w-[1100px] mx-auto mb-24 px-6">
      <FadeIn>
        <p className="text-center text-muted text-[15px] mb-6 font-mono">
          8 tools. One window. Zero context switching.
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <div
          ref={ref}
          className="rounded-xl border border-border overflow-hidden font-mono text-[11px] leading-[1.6]"
          style={{ background: panelBg }}
        >
          {/* macOS Title Bar */}
          <div
            className="px-4 py-2 flex items-center border-b border-border gap-3"
            style={{ background: headerBg }}
          >
            <div className="flex gap-1.5">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-3">
              <span className="text-[11px] text-zinc-300 font-semibold">acme-dashboard</span>
              <span className="text-zinc-500 text-[10px]">⑂ main ·</span>
              <span className="text-zinc-500 text-[10px]">3 changes</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <span className="bg-green-600 text-white px-2 py-0.5 rounded font-semibold flex items-center gap-1">
                <span className="text-[8px]">▶</span> npm run dev
              </span>
              <span className="text-zinc-500">○ Fetch</span>
              <span className="text-zinc-500">↓ Pull</span>
              <span className="text-zinc-500">↑ Push</span>
            </div>
          </div>

          {/* Main 3-panel layout */}
          <div className="flex" style={{ height: 420 }}>
            {/* Left: File Tree */}
            <div
              className="flex-shrink-0 border-r border-border overflow-hidden flex flex-col"
              style={{ width: 200, background: panelBg }}
            >
              <div className="px-3 py-1.5 text-[9px] font-bold text-zinc-500 uppercase tracking-wider border-b border-border">
                Explorer
              </div>
              <div className="flex-1 overflow-auto py-1">
                {fileTree.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 px-2 py-[2px] hover:bg-white/5 cursor-default"
                    style={{ paddingLeft: 8 + item.depth * 12 }}
                  >
                    {item.type === "folder" ? (
                      <span className="text-zinc-500 text-[9px] w-3 text-center">
                        {item.open ? "▾" : "▸"}
                      </span>
                    ) : (
                      <span className={`${item.color} text-[8px] font-bold w-3 text-center`}>
                        {item.icon}
                      </span>
                    )}
                    <span
                      className={`truncate ${
                        item.status === "added"
                          ? "text-green-400"
                          : item.status === "modified"
                          ? "text-amber"
                          : item.type === "folder"
                          ? "text-zinc-300"
                          : "text-zinc-400"
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.status === "modified" && (
                      <span className="text-amber text-[9px] ml-auto flex-shrink-0 font-semibold">M</span>
                    )}
                    {item.status === "added" && (
                      <span className="text-green-400 text-[9px] ml-auto flex-shrink-0 font-semibold">A</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Terminal */}
            <div className="flex-1 flex flex-col min-w-0 border-r border-border">
              {/* Terminal tab bar */}
              <div
                className="flex items-center border-b border-border px-2"
                style={{ background: headerBg }}
              >
                <div className="flex items-center gap-1 px-2 py-1.5 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  <span className="text-zinc-300 font-medium">Claude</span>
                </div>
                <div className="flex-1" />
                <div className="flex gap-1 text-[9px] text-zinc-600 mr-2">
                  <span className="px-1 cursor-default">⊞</span>
                  <span className="px-1 cursor-default">☐</span>
                </div>
                <div className="flex gap-1 text-[9px] text-zinc-500">
                  <span className="cursor-default">+Claude</span>
                  <span className="cursor-default ml-1">+Shell</span>
                </div>
              </div>

              {/* Model selector + commands */}
              <div
                className="px-3 py-1.5 border-b border-border flex items-center gap-2 text-[9px]"
                style={{ background: panelBg }}
              >
                <span className="text-zinc-500">Model:</span>
                {["Sonnet", "Opus", "Haiku"].map((m) => (
                  <span
                    key={m}
                    className={`px-1.5 py-0.5 rounded cursor-default ${
                      m === "Opus"
                        ? "text-amber bg-amber/15 font-semibold"
                        : "text-zinc-500"
                    }`}
                  >
                    {m}
                  </span>
                ))}
                <div className="flex-1" />
                {["/compact", "/clear", "/cost", "/config"].map((cmd) => (
                  <span key={cmd} className="text-zinc-500 cursor-default">
                    {cmd}
                  </span>
                ))}
                <span className="text-zinc-500 ml-2 px-1.5 py-0.5 rounded bg-white/5 cursor-default">
                  ⊕ Attach
                </span>
              </div>

              {/* Terminal content with animation */}
              <div className="flex-1 overflow-auto px-4 py-3">
                {terminalLines.slice(0, visibleLines).map((l, i) => {
                  if (l.type === "blank") return <div key={i} className="h-1.5" />;
                  if (l.type === "prompt")
                    return (
                      <div key={i} className="text-amber font-bold whitespace-pre">
                        {"❯ "}{l.text}
                      </div>
                    );
                  return (
                    <div key={i} className={`${l.cls} whitespace-pre`}>
                      {l.text}
                    </div>
                  );
                })}
                {visibleLines >= terminalLines.length && (
                  <div className="text-amber font-bold mt-2">
                    {"❯ "}
                    <span className="inline-block w-1.5 h-3 bg-amber animate-blink align-text-bottom" />
                  </div>
                )}
              </div>

              {/* Permission bar */}
              <div
                className="px-3 py-1.5 border-t border-border flex items-center text-[9px]"
                style={{ background: headerBg }}
              >
                <span className="text-amber">❯❯</span>
                <span className="text-zinc-400 ml-2">
                  bypass permissions on{" "}
                  <span className="text-zinc-600">(shift+tab to cycle)</span>
                </span>
                <div className="flex-1" />
                <span className="text-zinc-500">/buddy</span>
              </div>
            </div>

            {/* Right: Changes/Preview/History */}
            <div
              className="flex-shrink-0 flex flex-col overflow-hidden"
              style={{ width: 280, background: panelBg }}
            >
              {/* Tabs */}
              <div className="flex" style={{ background: headerBg }}>
                {["Changes", "Preview", "History"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setRightTab(tab.toLowerCase())}
                    className={`px-3 py-1.5 text-[10px] font-medium border-b-2 transition-colors ${
                      rightTab === tab.toLowerCase()
                        ? "text-white border-amber"
                        : "text-zinc-500 border-transparent hover:text-zinc-300"
                    }`}
                  >
                    {tab}
                    {tab === "Changes" && (
                      <span className="ml-1 text-[8px] bg-amber/20 text-amber px-1 rounded">
                        3
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-auto flex flex-col">
                {rightTab === "changes" && (
                  <>
                    {/* Added section */}
                    <div className="px-3 py-1.5 text-[9px] text-zinc-500 border-b border-border">
                      <span className="text-zinc-400">▸ Added</span>
                      <span className="ml-1 text-zinc-600">(0)</span>
                      <div className="text-[8px] text-zinc-600 mt-0.5">
                        No files added — check files below to add them for commit
                      </div>
                    </div>

                    {/* Changes section */}
                    <div className="px-3 py-1.5 text-[9px] border-b border-border">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400">▾ Changes</span>
                        <span className="text-zinc-600">(3)</span>
                        <div className="flex-1" />
                        <span className="text-blue-400 cursor-default text-[8px]">Git Add All</span>
                        <span className="text-red-400 cursor-default text-[8px]">Revert All</span>
                      </div>
                      {[
                        { name: "Header.tsx", status: "M", color: "text-yellow-500", path: "components" },
                        { name: "Dashboard.tsx", status: "M", color: "text-yellow-500", path: "pages" },
                        { name: "auth.ts", status: "A", color: "text-green-500", path: "lib" },
                      ].map((f, i) => (
                        <div key={i} className={`flex items-center gap-2 mt-1 py-0.5 ${i === 0 ? "bg-white/5 -mx-3 px-3 rounded" : ""}`}>
                          <span className="w-2.5 h-2.5 rounded-sm border border-zinc-600 flex-shrink-0" />
                          <span className={`${f.color} font-bold w-3 flex-shrink-0`}>{f.status}</span>
                          <span className="text-zinc-300 truncate">{f.name}</span>
                          <span className="text-zinc-600 text-[8px] ml-auto flex-shrink-0">{f.path}</span>
                        </div>
                      ))}
                    </div>

                    {/* Commit section */}
                    <div className="px-3 py-2 border-b border-border">
                      <div className="bg-white/5 rounded border border-border px-2 py-1.5 text-[9px] text-zinc-500 mb-2">
                        Commit message...
                      </div>
                      <div className="flex items-center gap-1.5 text-[8px]">
                        <span className="text-zinc-600 truncate">No fi...</span>
                        <span className="flex items-center gap-0.5 text-zinc-500">
                          <span className="w-2 h-2 rounded-sm border border-zinc-600 inline-block" /> Amend
                        </span>
                        <div className="flex-1" />
                        <span className="bg-green-600 text-white px-2 py-0.5 rounded font-semibold cursor-default">
                          Commit
                        </span>
                        <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-semibold cursor-default">
                          Commit & Push
                        </span>
                      </div>
                    </div>

                    {/* Diff view tabs */}
                    <div className="px-3 py-1.5 border-b border-border flex items-center gap-2 text-[8px]">
                      {["All", "Added", "Working"].map((t) => (
                        <span
                          key={t}
                          className={`cursor-default ${t === "All" ? "text-zinc-300" : "text-zinc-600"}`}
                        >
                          {t}
                        </span>
                      ))}
                      <div className="flex-1" />
                      {["Unified", "Split"].map((t) => (
                        <span
                          key={t}
                          className={`cursor-default ${
                            t === "Unified" ? "text-zinc-300 bg-white/5 px-1.5 py-0.5 rounded" : "text-zinc-600"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Diff placeholder */}
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-zinc-600 text-[10px]">Select a file to view diff</span>
                    </div>
                  </>
                )}

                {rightTab === "preview" && (
                  <div className="flex flex-col h-full">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 border-b border-border text-[9px]"
                      style={{ background: headerBg }}
                    >
                      <span className="text-zinc-500">←</span>
                      <span className="text-zinc-500">→</span>
                      <span className="text-zinc-500">⟳</span>
                      <div className="flex-1 bg-white/5 rounded px-2 py-0.5 text-zinc-500">
                        localhost:3000
                      </div>
                      <div className="flex gap-1 text-[8px] text-zinc-600">
                        {["SE", "14", "iPad", "💻"].map((d) => (
                          <span
                            key={d}
                            className={`px-1 rounded cursor-default ${
                              d === "💻" ? "text-amber bg-amber/10" : ""
                            }`}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-10 rounded border border-zinc-700 mx-auto mb-2 flex items-center justify-center">
                          <span className="text-[8px] text-zinc-600">Live UI</span>
                        </div>
                        <div className="text-zinc-600 text-[10px]">
                          Auto-refreshes on file changes
                        </div>
                        <div className="text-zinc-700 text-[9px] mt-1">
                          6 device presets · 25-150% zoom
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {rightTab === "history" && (
                  <div className="p-2 space-y-1.5">
                    {[
                      { msg: "Add JWT authentication", files: 3, time: "just now", cost: "$0.007" },
                      { msg: "Create dashboard layout", files: 5, time: "8 min ago", cost: "$0.014" },
                      { msg: "Initialize project", files: 12, time: "20 min ago", cost: "$0.022" },
                    ].map((h, i) => (
                      <div
                        key={i}
                        className={`p-2 rounded border text-[10px] cursor-default ${
                          i === 0 ? "border-amber/20 bg-amber/5" : "border-border"
                        }`}
                      >
                        <div className="text-zinc-300 font-medium">{h.msg}</div>
                        <div className="flex gap-3 text-zinc-600 mt-0.5 text-[9px]">
                          <span>{h.time}</span>
                          <span>{h.files} files</span>
                          <span>⟡ {h.cost}</span>
                        </div>
                      </div>
                    ))}
                    <div className="text-[9px] text-zinc-600 text-center pt-1">
                      Session total: 6,480 tokens · $0.043
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div
            className="px-3 py-1 flex items-center text-[9px] text-zinc-500 gap-4 border-t border-border"
            style={{ background: headerBg }}
          >
            <span className="text-green-500">● connected</span>
            <span>main</span>
            <span>3 changes</span>
            <div className="flex-1" />
            <div className="flex items-center gap-1">
              <span>Session</span>
              <div className="w-12 h-1.5 rounded-full bg-zinc-700 overflow-hidden">
                <div className="h-full rounded-full bg-green-500" style={{ width: "56%" }} />
              </div>
              <span>56%</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Weekly</span>
              <div className="w-12 h-1.5 rounded-full bg-zinc-700 overflow-hidden">
                <div className="h-full rounded-full bg-amber" style={{ width: "23%" }} />
              </div>
              <span>23%</span>
            </div>
            <span>Sonnet 0%</span>
            <span className="text-zinc-600">|</span>
            <span>Stash</span>
            <span>● Auto-commit</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
