import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS, telLink, whatsappLink } from "@/lib/cc/data";
import { IMG } from "@/lib/cc/assets";
import { BrandLink } from "./ChromeButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
          <a href="#top" className="flex min-w-0 items-center" aria-label={`${BUSINESS.name} home`}>
            <img
              src={IMG.logoWhite}
              alt={`${BUSINESS.name} logo`}
              className="h-9 w-auto md:h-11"
              width={900}
              height={392}
            />
          </a>

          <div className="flex items-center gap-2 md:gap-6">
            <ul className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                  >
                    {l.label}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={telLink}
              className="hidden items-center gap-2 border border-border px-4 py-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:border-brand hover:text-brand md:inline-flex"
            >
              <Phone className="size-3.5" />
              {BUSINESS.phoneDisplay}
            </a>

            <BrandLink
              href={whatsappLink(`Hi ${BUSINESS.short}, I'd like a quote for my car.`)}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="hidden sm:inline-flex"
            >
              WhatsApp
            </BrandLink>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-brand hover:text-brand lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-60 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <img src={IMG.logoWhite} alt="" className="h-9 w-auto" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex size-11 items-center justify-center border border-border"
              >
                <X className="size-5" />
              </button>
            </div>

            <ul className="mt-6 px-5">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  className="border-b border-border"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-5 text-3xl tracking-tight"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 px-5">
              <BrandLink
                href={whatsappLink(`Hi ${BUSINESS.short}, I'd like a quote for my car.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </BrandLink>
              <BrandLink href={telLink} variant="outline">
                Call {BUSINESS.phoneDisplay}
              </BrandLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
