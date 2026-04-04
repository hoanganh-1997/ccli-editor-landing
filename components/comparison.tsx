import { FadeIn } from "./fade-in";

const rows = [
  ["Bundle size", "~12 MB", "~200 MB", "~150 MB"],
  ["Boot time", "< 1s", "2-3s", "2-3s"],
  ["RAM usage", "~50 MB", "~300 MB", "~200 MB"],
  ["Code editor", "None (terminal-first)", "Full editor", "Full editor"],
  ["Git diff viewer", "Native visual diffs", "Built-in", "Built-in"],
  ["Browser preview", "Built-in iframe", "Via extension", "Via extension"],
  ["AI model lock-in", "None", "Multi-model", "Copilot"],
  ["Price", "Free + open source", "$20-200/mo", "Free + $10/mo"],
];

export function Comparison() {
  return (
    <section className="max-w-[900px] mx-auto mb-24 px-6">
      <FadeIn>
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-extrabold text-white font-mono tracking-tight">
            How it compares
          </h2>
          <p className="text-muted text-[15px] mt-2">
            Less is more. Deliberately.
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="bg-surface rounded-[14px] border border-border overflow-x-auto">
          <table className="w-full border-collapse text-sm font-mono">
            <thead>
              <tr>
                {["", "CCLI Editor", "Cursor", "VS Code"].map((h, i) => (
                  <th
                    key={i}
                    className={`text-left px-4 py-3 border-b border-border text-[13px] font-medium ${
                      i === 1
                        ? "text-amber font-bold bg-amber/[0.04]"
                        : "text-muted"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ccli, cursor, vscode], i) => (
                <tr key={i}>
                  <td className="px-4 py-2.5 border-b border-border/20 text-muted">
                    {label}
                  </td>
                  <td className="px-4 py-2.5 border-b border-border/20 text-white font-medium bg-amber/[0.04]">
                    {ccli}
                  </td>
                  <td className="px-4 py-2.5 border-b border-border/20 text-dim">
                    {cursor}
                  </td>
                  <td className="px-4 py-2.5 border-b border-border/20 text-dim">
                    {vscode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </section>
  );
}
