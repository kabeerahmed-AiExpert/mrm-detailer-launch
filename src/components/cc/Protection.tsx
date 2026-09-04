import { Shield, Droplets, Sparkles, MessageCircle } from "lucide-react";
import { BUSINESS, PPF_COVERAGE, whatsappLink } from "@/lib/cc/data";
import { IMG, CLIPS } from "@/lib/cc/assets";
import { BrandLink } from "./ChromeButton";
import { Reveal, SectionLabel } from "./Reveal";

const LAYERS = [
  {
    icon: Shield,
    title: "Impact absorption",
    body: "Urethane film takes stone chips and scuffs so the paint underneath doesn't.",
  },
  {
    icon: Sparkles,
    title: "Self-healing top coat",
    body: "Light swirls and scuffs in the film pull back together with heat.",
  },
  {
    icon: Droplets,
    title: "Hydrophobic surface",
    body: "Water, dust and road grime release far more easily on wash day.",
  },
];

export function Protection() {
  const clip = CLIPS[2] ?? CLIPS[0]!;

  return (
    <section id="protection" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>Paint protection film</SectionLabel>
              <h2 className="font-display mt-5 text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight">
                A layer between your paint and <span className="chrome-text">the road</span>.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                PPF is a clear urethane film fitted over your paint. It is the only protection that
                physically stops stone chips — coatings add gloss and chemical resistance, film adds
                armour. Most owners combine both.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px border border-border bg-border">
              {LAYERS.map((l, i) => (
                <Reveal key={l.title} delay={i * 0.06}>
                  <div className="flex gap-4 bg-background p-6">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center border border-border text-brand">
                      <l.icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg tracking-tight">{l.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {l.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal delay={0.1}>
              <video
                src={clip.src}
                poster={clip.poster}
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label={clip.alt}
                className="aspect-[4/5] w-full border border-border object-cover"
              />
            </Reveal>

            <Reveal delay={0.16}>
              <h3 className="font-display mt-10 text-xl tracking-tight">Coverage options</h3>
              <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2">
                {PPF_COVERAGE.map((p) => (
                  <div key={p.name} className="bg-background p-5">
                    <p className="label-xs text-brand">{p.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                ))}
              </div>

              <BrandLink
                href={whatsappLink(`Hi ${BUSINESS.short}, I'd like a PPF quote for my car.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full sm:w-auto"
              >
                <MessageCircle className="size-4" />
                Ask about PPF
              </BrandLink>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <img
            src={IMG.ppf2}
            alt="Paint protection film being installed on a vehicle at MRM Car Detailing"
            className="aspect-[21/9] w-full border border-border object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
