"use client";

import { useState, useEffect } from "react";
import { useInView } from "@/lib/hooks";
import { FadeIn } from "./fade-in";

const terminalLines = [
  { c: "blank", t: "" },
  {
    c: "text-amber font-bold",
    t: "> Add authentication with JWT to the login endpoint",
  },
  { c: "blank", t: "" },
  { c: "text-muted", t: "  I'll add JWT authentication. Here's my plan:" },
  { c: "blank", t: "" },
  { c: "text-muted", t: "  1. Create auth middleware" },
  { c: "text-muted", t: "  2. Add JWT token generation" },
  { c: "text-muted", t: "  3. Update login route handler" },
  { c: "text-muted", t: "  4. Add token validation" },
  { c: "blank", t: "" },
  { c: "text-green-500", t: "  ✓ Modified src/middleware/auth.ts" },
  { c: "text-green-500", t: "  ✓ Modified src/routes/login.ts" },
  { c: "text-blue-400", t: "  + Created src/utils/jwt.ts" },
  { c: "blank", t: "" },
  { c: "text-zinc-600", t: "  ⟡ 2,341 tokens · $0.007 · 3.4s" },
];

const fileTree = [
  { depth: 0, name: "src", type: "folder", open: true },
  { depth: 1, name: "components", type: "folder", open: false },
  { depth: 1, name: "middleware", type: "folder", open: true },
  {
    depth: 2,
    name: "auth.ts",
    type: "file",
    icon: "TS",
    color: "text-blue-400",
    status: "modified" as const,
  },
  { depth: 1, name: "routes", type: "folder", open: true },
  {
    depth: 2,
    name: "login.ts",
    type: "file",
    icon: "TS",
    color: "text-blue-400",
    status: "modified" as const,
  },
  { depth: 1, name: "utils", type: "folder", open: true },
  {
    depth: 2,
    name: "jwt.ts",
    type: "file",
    icon: "TS",
    color: "text-blue-400",
    status: "added" as const,
  },
  { depth: 0, name: "tests", type: "folder", open: false },
  {
    depth: 0,
    name: "package.json",
    type: "file",
    icon: "{}",
    color: "text-yellow-500",
  },
  {
    depth: 0,
    name: "CLAUDE.md",
    type: "file",
    icon: "MD",
    color: "text-zinc-400",
  },
];

const diffContent = [
  { type: "header", text: "src/middleware/auth.ts" },
  { type: "info", text: "@@ -1,4 +1,18 @@" },
  {
    type: "normal",
    text: ' import { Request, Response, NextFunction } from "express";',
  },
  { type: "added", text: ' import { verifyToken } from "../utils/jwt";' },
  { type: "normal", text: "" },
  {
    type: "removed",
    text: " export function auth(req: Request, res: Response, next: NextFunction) {",
  },
  {
    type: "added",
    text: " export async function auth(req: Request, res: Response, next: NextFunction) {",
  },
  {
    type: "added",
    text: '   const token = req.headers.authorization?.split(" ")[1];',
  },
  { type: "added", text: "   if (!token) {" },
  {
    type: "added",
    text: '     return res.status(401).json({ error: "No token" });',
  },
  { type: "added", text: "   }" },
  { type: "added", text: "   try {" },
  { type: "added", text: "     const payload = await verifyToken(token);" },
  { type: "added", text: "     req.user = payload;" },
  { type: "normal", text: "     next();" },
  { type: "added", text: "   } catch {" },
  {
    type: "added",
    text: '     return res.status(403).json({ error: "Invalid token" });',
  },
  { type: "added", text: "   }" },
  { type: "normal", text: " }" },
];

export function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [rightTab, setRightTab] = useState("changes");
  const [ref, visible] = useInView(0.2);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= terminalLines.length) clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, [visible]);

  const panelBg = "#1a1b2e";
  const headerBg = "#1e1f35";

  return (
    <section className="max-w-[1000px] mx-auto mb-24 px-6">
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
            className="px-4 py-2 flex items-center border-b border-border"
            style={{ background: headerBg }}
          >
            <div className="flex gap-1.5">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[11px] text-zinc-400 font-medium">
                CCLI Editor
              </span>
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
                      <span
                        className={`${item.color} text-[8px] font-bold w-3 text-center`}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span
                      className={`truncate ${
                        item.status === "added"
                          ? "text-green-400"
                          : item.status === "modified"
                          ? "text-white"
                          : item.type === "folder"
                          ? "text-zinc-300"
                          : "text-zinc-400"
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.status === "modified" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 ml-auto flex-shrink-0" />
                    )}
                    {item.status === "added" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 ml-auto flex-shrink-0" />
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
                <div className="flex items-center gap-1 px-2 py-1 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                  <span className="text-zinc-300 font-medium">Claude</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 text-[10px] text-zinc-600 hover:text-zinc-400 cursor-default">
                  +Claude
                </div>
                <div className="flex items-center gap-1 px-2 py-1 text-[10px] text-zinc-600 hover:text-zinc-400 cursor-default">
                  +Shell
                </div>
                <div className="flex-1" />
                <div className="flex gap-2 text-[9px] text-zinc-500">
                  {["Sonnet", "Opus", "Haiku"].map((m) => (
                    <span
                      key={m}
                      className={`px-1.5 py-0.5 rounded cursor-default ${
                        m === "Opus"
                          ? "text-amber bg-amber/10"
                          : "hover:text-zinc-300"
                      }`}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Claude Code header */}
              <div className="px-4 pt-3 pb-1 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-amber/20 flex items-center justify-center">
                    <span className="text-amber text-[14px]">⌘</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-300">
                      <span className="font-bold">Claude Code</span>{" "}
                      <span className="text-zinc-500">v2.1.92</span>
                    </div>
                    <div className="text-[9px] text-zinc-500">
                      Opus 4.6 · Claude Team
                    </div>
                  </div>
                </div>
                <div className="flex-1" />
                <div className="flex gap-1 text-[9px]">
                  {["/compact", "/clear", "/cost", "/config"].map((cmd) => (
                    <span
                      key={cmd}
                      className="px-1.5 py-0.5 rounded bg-white/5 text-zinc-500"
                    >
                      {cmd}
                    </span>
                  ))}
                </div>
              </div>

              {/* Terminal content */}
              <div className="flex-1 overflow-auto px-4 pb-3">
                {terminalLines.slice(0, visibleLines).map((l, i) =>
                  l.c === "blank" ? (
                    <div key={i} className="h-1.5" />
                  ) : (
                    <div key={i} className={`${l.c} whitespace-pre`}>
                      {l.t}
                    </div>
                  )
                )}
                {visibleLines >= terminalLines.length && (
                  <div className="text-amber font-bold mt-2">
                    {"❯"}{" "}
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
                    {/* Changed files */}
                    <div className="border-b border-border">
                      {[
                        {
                          name: "auth.ts",
                          status: "M",
                          color: "text-yellow-500",
                        },
                        {
                          name: "login.ts",
                          status: "M",
                          color: "text-yellow-500",
                        },
                        {
                          name: "jwt.ts",
                          status: "A",
                          color: "text-green-500",
                        },
                      ].map((f, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 px-3 py-1 text-[10px] hover:bg-white/5 cursor-default ${
                            i === 0 ? "bg-white/5" : ""
                          }`}
                        >
                          <span className={`${f.color} font-bold w-3`}>
                            {f.status}
                          </span>
                          <span className="text-zinc-300 truncate">
                            {f.name}
                          </span>
                          <span className="ml-auto text-[8px] text-zinc-600">
                            ☐
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Diff */}
                    <div className="flex-1 overflow-auto text-[9px] leading-[1.6]">
                      {diffContent.map((line, i) => {
                        if (line.type === "header")
                          return (
                            <div
                              key={i}
                              className="px-3 py-1 text-zinc-400 font-bold bg-white/5"
                            >
                              {line.text}
                            </div>
                          );
                        if (line.type === "info")
                          return (
                            <div
                              key={i}
                              className="px-3 py-0.5 text-purple-400 bg-purple-500/5"
                            >
                              {line.text}
                            </div>
                          );
                        const bg =
                          line.type === "added"
                            ? "bg-green-500/10"
                            : line.type === "removed"
                            ? "bg-red-500/10"
                            : "";
                        const color =
                          line.type === "added"
                            ? "text-green-400"
                            : line.type === "removed"
                            ? "text-red-400"
                            : "text-zinc-500";
                        const prefix =
                          line.type === "added"
                            ? "+"
                            : line.type === "removed"
                            ? "-"
                            : " ";
                        return (
                          <div
                            key={i}
                            className={`px-3 whitespace-pre ${bg} ${color}`}
                            style={{
                              borderLeft:
                                line.type !== "normal"
                                  ? `2px solid ${
                                      line.type === "added"
                                        ? "rgba(34,197,94,0.3)"
                                        : "rgba(239,68,68,0.3)"
                                    }`
                                  : "2px solid transparent",
                            }}
                          >
                            <span className="text-zinc-600 inline-block w-2.5">
                              {prefix}
                            </span>
                            {line.text}
                          </div>
                        );
                      })}
                    </div>
                    {/* Stage/Discard per hunk */}
                    <div className="border-t border-border p-2">
                      <div className="flex gap-1.5">
                        <button className="flex-1 py-1 rounded text-[9px] font-semibold bg-green-600/20 text-green-400">
                          ✓ Stage hunk
                        </button>
                        <button className="flex-1 py-1 rounded text-[9px] font-semibold bg-red-600/20 text-red-400">
                          ✗ Discard
                        </button>
                      </div>
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
                        localhost:5173
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
                          <span className="text-[8px] text-zinc-600">
                            Live UI
                          </span>
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
                      {
                        msg: "Add JWT authentication",
                        files: 3,
                        time: "just now",
                        cost: "$0.007",
                      },
                      {
                        msg: "Create project structure",
                        files: 8,
                        time: "5 min ago",
                        cost: "$0.012",
                      },
                      {
                        msg: "Initialize Tauri v2 app",
                        files: 12,
                        time: "12 min ago",
                        cost: "$0.019",
                      },
                    ].map((h, i) => (
                      <div
                        key={i}
                        className={`p-2 rounded border text-[10px] cursor-default ${
                          i === 0
                            ? "border-amber/20 bg-amber/5"
                            : "border-border"
                        }`}
                      >
                        <div className="text-zinc-300 font-medium">
                          {h.msg}
                        </div>
                        <div className="flex gap-3 text-zinc-600 mt-0.5 text-[9px]">
                          <span>{h.time}</span>
                          <span>{h.files} files</span>
                          <span>⟡ {h.cost}</span>
                        </div>
                      </div>
                    ))}
                    <div className="text-[9px] text-zinc-600 text-center pt-1">
                      Session total: 4,682 tokens · $0.038
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
            <span className="text-green-500">● Connected</span>
            <span>main</span>
            <span>↑0 ↓0</span>
            <span>3 uncommitted</span>
            <div className="flex-1" />
            <span>⟡ Session: 4,682 tokens · $0.038</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
