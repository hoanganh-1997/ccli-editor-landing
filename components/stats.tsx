import { FadeIn } from "./fade-in";

export function Stats() {
  return (
    <section id="stats" className="max-w-[900px] mx-auto mb-24 px-6">
      <FadeIn>
        <div className="bg-surface border border-border rounded-[14px] py-8 px-6">
          <p className="text-center text-[15px] text-muted font-mono mb-6">
            <span className="text-amber font-bold">8</span> integrated tools.{" "}
            <span className="text-white font-semibold">One</span> 10MB app.
            Built with{" "}
            <span className="text-white font-semibold">Rust</span> — not
            Electron.
          </p>
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: "~10MB", label: "Bundle size" },
              { value: "<1s", label: "Boot time" },
              { value: "~50MB", label: "RAM usage" },
              { value: "Free", label: "Price" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-amber font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[12px] text-dim mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
