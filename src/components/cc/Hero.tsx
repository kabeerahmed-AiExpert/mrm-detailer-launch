import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS, telLink, whatsappLink } from "@/lib/cc/data";
import { HERO_CLIP } from "@/lib/cc/assets";
import { BrandLink } from "./ChromeButton";
import { WordReveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="size-full object-cover"
          src={HERO_CLIP.src}
          poster={HERO_CLIP.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={HERO_CLIP.alt}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="studio-vignette absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pt-32 pb-28 md:px-8 md:pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-brand" />
          <span className="label-xs text-brand">
            {BUSINESS.city}, {BUSINESS.country}
          </span>
        </motion.div>

        <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.02em]">
          <WordReveal text="Paint protection" immediate />
          <br />
          <WordReveal text="done properly." className="chrome-text" delay={0.12} immediate />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          PPF, ceramic and graphene coatings, wrapping and full detailing — carried out in a
          controlled indoor studio in Karachi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <BrandLink
            href={whatsappLink(`Hi ${BUSINESS.short}, I'd like a quote for my car.`)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <MessageCircle className="size-4" />
            Get a quote on WhatsApp
          </BrandLink>
          <BrandLink href={telLink} variant="outline" size="lg">
            <Phone className="size-4" />
            {BUSINESS.phoneDisplay}
          </BrandLink>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <span className="animate-scroll-hint block h-10 w-px bg-brand" />
      </div>
    </section>
  );
}
