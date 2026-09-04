import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cc/Navbar";
import { Hero } from "@/components/cc/Hero";
import { Work } from "@/components/cc/Work";
import { Services } from "@/components/cc/Services";
import { Protection } from "@/components/cc/Protection";
import { Process } from "@/components/cc/Process";
import { Contact } from "@/components/cc/Contact";
import { MobileBar } from "@/components/cc/MobileBar";
import { Loader } from "@/components/cc/Loader";
import { BUSINESS } from "@/lib/cc/data";

const TITLE = "MRM Car Detailing | PPF, Ceramic Coating & Detailing in Karachi";
const DESCRIPTION =
  "MRM Car Detailing in Karachi — paint protection film, ceramic and graphene coatings, vinyl wrapping, paint correction and full interior and exterior detailing. Message us on WhatsApp for a quote.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: BUSINESS.name,
          description: DESCRIPTION,
          telephone: BUSINESS.phoneIntl,
          address: {
            "@type": "PostalAddress",
            addressLocality: BUSINESS.city,
            addressCountry: "PK",
          },
          areaServed: BUSINESS.city,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Protection />
        <Process />
        <Contact />
      </main>
      <MobileBar />
    </>
  );
}
