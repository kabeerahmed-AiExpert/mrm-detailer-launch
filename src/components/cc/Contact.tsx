import { MessageCircle, Phone, MapPin } from "lucide-react";
import { BUSINESS, NAV_LINKS, telLink, whatsappLink } from "@/lib/cc/data";
import { IMG } from "@/lib/cc/assets";
import { BrandLink } from "./ChromeButton";
import { Reveal, SectionLabel } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>Get in touch</SectionLabel>
              <h2 className="font-display mt-5 text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight">
                Tell us about <span className="chrome-text">your car</span>.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Send the make, model and what you're after on WhatsApp. We'll come back with what we
                recommend and a price for your car specifically.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-9 flex flex-wrap gap-3">
                <BrandLink
                  href={whatsappLink(`Hi ${BUSINESS.short}, I'd like a quote for my car.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <MessageCircle className="size-4" />
                  Message on WhatsApp
                </BrandLink>
                <BrandLink href={telLink} variant="outline" size="lg">
                  <Phone className="size-4" />
                  Call us
                </BrandLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="grid gap-px border border-border bg-border">
              <Row icon={<Phone className="size-4" />} label="Phone & WhatsApp">
                <a href={telLink} className="hover:text-brand">
                  {BUSINESS.phoneDisplay}
                </a>
              </Row>
              <Row icon={<MapPin className="size-4" />} label="Studio">
                {BUSINESS.city}, {BUSINESS.country}
              </Row>
              <div className="bg-background p-6">
                <p className="label-xs">Services</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  PPF · Ceramic & graphene coatings · Wrapping · Paint correction · Interior and
                  exterior detailing
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-12 md:grid-cols-[auto_1fr] md:items-center md:px-8">
          <img src={IMG.logoWhite} alt={`${BUSINESS.name} logo`} className="h-10 w-auto" />
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 md:justify-end">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase hover:text-brand"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] border-t border-border px-5 py-6 md:px-8">
          <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            © {new Date().getFullYear()} {BUSINESS.name} — {BUSINESS.city}
          </p>
        </div>
      </footer>
    </section>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 bg-background p-6">
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-border text-brand">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="label-xs">{label}</p>
        <div className="mt-2 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
