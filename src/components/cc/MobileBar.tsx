import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS, telLink, whatsappLink } from "@/lib/cc/data";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
      <a
        href={telLink}
        className="flex flex-col items-center gap-1 py-3 font-mono text-[10px] tracking-[0.2em] text-foreground uppercase"
      >
        <Phone className="size-4" />
        Call
      </a>
      <a
        href={whatsappLink(`Hi ${BUSINESS.short}, I'd like a quote for my car.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 bg-brand py-3 font-mono text-[10px] tracking-[0.2em] text-brand-foreground uppercase"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}
