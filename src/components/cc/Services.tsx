import { useState } from "react";
import { ArrowUpRight, X, Check, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SERVICES, whatsappLink, type Service } from "@/lib/cc/data";
import { BrandLink } from "./ChromeButton";
import { Reveal, SectionLabel } from "./Reveal";

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-display mt-5 max-w-3xl text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight">
            Everything your car <span className="chrome-text">needs</span>.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Tap any service for what's involved. Quotes depend on the car and its condition — send
            us a message and we'll be straight with you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i, 5) * 0.04}>
              <button
                onClick={() => setActive(s)}
                className="group flex h-full w-full flex-col justify-between bg-background p-7 text-left transition-colors duration-300 hover:bg-surface"
              >
                <div>
                  <span className="label-xs">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display mt-4 text-2xl leading-tight tracking-tight transition-colors group-hover:text-brand">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase transition-colors group-hover:text-brand">
                  Details
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-70 flex items-end justify-center bg-background/80 backdrop-blur-sm md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              role="dialog"
              aria-label={active.name}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[88svh] w-full max-w-2xl overflow-y-auto border border-border bg-background"
            >
              {active.image && (
                <img
                  src={active.image}
                  alt={`${active.name} at MRM Car Detailing`}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-7 md:p-9">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <h3 className="font-display text-3xl leading-tight tracking-tight">
                    {active.name}
                  </h3>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="flex size-10 shrink-0 items-center justify-center border border-border transition-colors hover:border-brand hover:text-brand"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <p className="mt-5 leading-relaxed text-muted-foreground">{active.detail}</p>

                <ul className="mt-7 grid gap-3">
                  {active.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <BrandLink
                  href={whatsappLink(active.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full"
                >
                  <MessageCircle className="size-4" />
                  Ask about {active.name}
                </BrandLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
