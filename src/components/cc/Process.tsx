import { PROCESS, WHY } from "@/lib/cc/data";
import { IMG } from "@/lib/cc/assets";
import { Reveal, SectionLabel } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-display mt-5 max-w-3xl text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight">
            No surprises, <span className="chrome-text">start to finish</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="h-full bg-background p-6">
                <span className="label-xs text-brand">{p.step}</span>
                <h3 className="font-display mt-4 text-xl tracking-tight">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={IMG.studio}
              alt="Vehicle being worked on inside the MRM Car Detailing studio in Karachi"
              className="aspect-[4/3] w-full border border-border object-cover"
              loading="lazy"
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>Why MRM</SectionLabel>
              <h2 className="font-display mt-5 text-[clamp(1.75rem,4vw,3rem)] leading-[1] tracking-tight">
                The finish depends on the <span className="chrome-text">prep</span>.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="h-full bg-background p-6">
                    <h3 className="font-display text-lg tracking-tight">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
