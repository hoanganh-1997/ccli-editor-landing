import { FadeIn } from "./fade-in";

function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="text-center">
        <div className="text-4xl font-extrabold text-amber font-mono tracking-tight">{value}</div>
        <div className="text-[13px] text-dim mt-1">{label}</div>
      </div>
    </FadeIn>
  );
}

export function Stats() {
  return (
    <section className="max-w-[700px] mx-auto mb-20 px-6">
      <div className="grid grid-cols-4 gap-4">
        <Stat value="~12MB" label="Bundle size" delay={0} />
        <Stat value="<1s" label="Boot time" delay={0.1} />
        <Stat value="~50MB" label="RAM usage" delay={0.2} />
        <Stat value="$0" label="Price" delay={0.3} />
      </div>
    </section>
  );
}
