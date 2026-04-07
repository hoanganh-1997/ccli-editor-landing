"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Logo size={28} />
          <span className="font-mono font-bold text-[15px] text-white tracking-tight">
            CCLI Editor
          </span>
        </Link>
        <div className="flex gap-1.5">
          <Link
            href="/"
            className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium font-mono no-underline transition-colors ${
              pathname === "/"
                ? "bg-surface-2 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/quickstart"
            className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium font-mono no-underline transition-colors ${
              pathname === "/quickstart"
                ? "bg-surface-2 text-white"
                : "text-muted hover:text-white"
            }`}
          >
            Quickstart
          </Link>
          <a
            href="https://github.com/hoanganh-1997/ccli-editor-releases/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg text-[13px] font-medium font-mono no-underline text-muted hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
