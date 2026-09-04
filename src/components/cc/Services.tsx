import { useState } from "react";
import { ArrowUpRight, X, Check, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SERVICES, whatsappLink, type Service } from "@/lib/cc/data";
import { BrandLink } from "./ChromeButton";
import { SectionLabel, WordReveal, Reveal } from "./Reveal";

export function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="services" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="font-display mt-5 text-[clamp(2.2rem,6vw,5.2rem)] leading-[0.9]">
              <WordReveal text="Services" />
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Tap any service for what's involved. Quotes depend on the car and its condition —
            message us and we'll be straight with you.
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-border">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={Math.min(i, 6) * 0.04}>
            <button
              onClick={() => setActive(s)}
              onMouseEnter={() => setHover(s.id)}
              onMouseLeave={() => setHover(null)}
              className="group relative block w-full overflow-hidden border-b border-border text-left"
            >
              {s.image && (
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="size-full scale-105 object-cover transition-transform duration-[1200ms] group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-background/75" />
                </div>
              )}

              <div className="relative mx-auto flex max-w-[1500px] items-center gap-5 px-5 py-8 md:gap-10 md:px-10 md:py-12">
                <span className="font-mono text-sm text-brand transition-all duration-500 group-hover:text-lg md:w-20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-[clamp(1.5rem,4.4vw,3.4rem)] leading-none transition-transform duration-500 group-hover:translate-x-2">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground transition-transform duration-500 group-hover:translate-x-2 md:text-base">
                    {s.summary}
                  </p>
                  <span
                    className={`mt-4 block h-px bg-brand transition-all duration-700 ${
                      hover === s.id ? "w-full" : "w-0"
                    }`}
                  />
                </div>
                <span className="flex size-11 shrink-0 items-center justify-center border border-border text-muted-foreground transition-all duration-300 group-hover:border-brand group-hover:text-brand md:size-14">
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
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
