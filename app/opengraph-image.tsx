import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "CCLI Editor — Desktop Editor for Claude Code CLI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0b1a",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Amber accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#d97706",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Logo + name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 32,
            }}
          >
            {/* Simple logo mark */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "#d97706",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 900,
                color: "#0a0b1a",
              }}
            >
              {"</>"}
            </div>
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: -0.5,
              }}
            >
              CCLI Editor
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.15,
              letterSpacing: -2,
              maxWidth: 800,
              marginBottom: 12,
            }}
          >
            One window for your entire
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#d97706",
              textAlign: "center",
              lineHeight: 1.15,
              letterSpacing: -2,
              marginBottom: 40,
            }}
          >
            Claude Code CLI workflow.
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 20,
              color: "#9ca3af",
              textAlign: "center",
              maxWidth: 650,
              lineHeight: 1.5,
              marginBottom: 48,
            }}
          >
            File tree, git tools, browser preview, code editor, diff viewer,
            token tracking — in one lightweight app.
          </div>

          {/* Stats bar */}
          <div
            style={{
              display: "flex",
              gap: 40,
              alignItems: "center",
            }}
          >
            {[
              { value: "~10MB", label: "Bundle" },
              { value: "<1s", label: "Boot" },
              { value: "~50MB", label: "RAM" },
              { value: "Free", label: "Price" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#d97706",
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: 14, color: "#6b7280" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
