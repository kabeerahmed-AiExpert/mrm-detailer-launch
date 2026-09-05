import { IMG } from "./assets";
import agenticLogo from "@/assets/agentic-softwares-logo.png.asset.json";

export const BUSINESS = {
  name: "MRM Car Detailing",
  short: "MRM",
  city: "Karachi",
  country: "Pakistan",
  phoneDisplay: "+92 342 2701703",
  phoneIntl: "+923422701703",
  whatsapp: "923422701703",
  tagline: "Premium car detailing, paint protection film and coatings.",
} as const;

export const SOCIALS = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/mrmcardetailing/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/mrmcardetailing/" },
  { id: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@mrmcardetailing" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@mrmcardetailing" },
] as const;

export const DEVELOPER = {
  name: "Agentic Softwares",
  logo: agenticLogo.url,
  phone: "+923166676053",
  phoneDisplay: "+92 316 6676053",
  instagram: "https://www.instagram.com/Agenticsoftwares/",
} as const;

/** WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${BUSINESS.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const telLink = `tel:${BUSINESS.phoneIntl}`;

export type Service = {
  id: string;
  name: string;
  summary: string;
  detail: string;
  points: string[];
  image?: string;
  wa: string;
};

export const SERVICES: Service[] = [
  {
    id: "ppf",
    name: "Paint Protection Film",
    summary: "Self-healing film that takes the damage instead of your paint.",
    detail:
      "Transparent urethane film installed panel by panel — full body, front end or high-impact areas only. It absorbs stone chips, scuffs and road debris while keeping the factory finish underneath untouched.",
    points: [
      "Full body, front-end or partial coverage",
      "Panel-by-panel installation",
      "Original paint stays untouched",
    ],
    image: IMG.ppf,
    wa: "Hi MRM, I'd like a quote for Paint Protection Film.",
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    summary: "A hard, hydrophobic layer bonded to your clear coat.",
    detail:
      "The paint is decontaminated and corrected first, then coated. The result is a slicker surface that repels water and dust and makes routine washing far easier.",
    points: ["Paint prepped and corrected first", "Hydrophobic, easy-clean finish", "Deep gloss"],
    image: IMG.detail,
    wa: "Hi MRM, I'd like a quote for Ceramic Coating.",
  },
  {
    id: "graphene",
    name: "Graphene Coating",
    summary: "Graphene-infused protection with added slickness and heat resistance.",
    detail:
      "An upgrade over standard ceramic for owners who want longer-lasting slickness and reduced water spotting in Karachi's heat and humidity.",
    points: ["Reduced water spotting", "High slickness", "Heat resistant"],
    wa: "Hi MRM, I'd like a quote for Graphene Coating.",
  },
  {
    id: "paint-correction",
    name: "Paint Correction & Polishing",
    summary: "Machine polishing that removes swirls, haze and light scratches.",
    detail:
      "Multi-stage compounding and polishing under inspection lighting to level defects in the clear coat and restore clarity before any coating goes on.",
    points: ["Swirl and hologram removal", "Multi-stage machine polish", "Coating-ready finish"],
    image: IMG.work,
    wa: "Hi MRM, I'd like a quote for Paint Correction & Polishing.",
  },
  {
    id: "exterior",
    name: "Exterior Detailing",
    summary: "A full decontamination wash, wheels, glass and trim.",
    detail:
      "Foam pre-wash, contact wash, iron and tar removal, clay treatment, wheel and arch cleaning, glass and trim dressing.",
    points: ["Decontamination wash", "Wheels, arches and tyres", "Glass and trim dressed"],
    image: IMG.hero,
    wa: "Hi MRM, I'd like to book Exterior Detailing.",
  },
  {
    id: "interior",
    name: "Interior Detailing",
    summary: "Deep clean of every surface inside the cabin.",
    detail:
      "Vacuuming, steam and extraction on fabric, careful cleaning and conditioning of leather, plus dashboard, vents, headliner and boot.",
    points: ["Steam and extraction", "Leather cleaned and conditioned", "Vents, headliner and boot"],
    wa: "Hi MRM, I'd like to book Interior Detailing.",
  },
  {
    id: "wrap",
    name: "Vinyl Wrapping",
    summary: "Colour change and accent wraps installed cleanly.",
    detail:
      "Full colour change, roof and pillar wraps, chrome delete and accent panels — installed with proper edge wrapping so it looks factory.",
    points: ["Full colour change", "Chrome delete", "Roof, pillars and accents"],
    image: IMG.ppf2,
    wa: "Hi MRM, I'd like a quote for Vinyl Wrapping.",
  },
  {
    id: "ppf-matte",
    name: "Matte & Coloured PPF",
    summary: "Protection and a finish change in a single layer.",
    detail:
      "Matte, satin and coloured protection films for owners who want a different look without giving up the impact protection of PPF.",
    points: ["Matte and satin finishes", "Coloured film options", "Protection retained"],
    wa: "Hi MRM, I'd like a quote for Matte or Coloured PPF.",
  },
  {
    id: "glass",
    name: "Glass & Windscreen Coating",
    summary: "Hydrophobic coating for clearer vision in rain.",
    detail:
      "Glass is polished and decontaminated, then coated so water beads and clears quickly at speed. Useful through monsoon season.",
    points: ["Water beads and clears fast", "Reduced glare at night", "Easier bug and grime removal"],
    wa: "Hi MRM, I'd like a quote for Glass & Windscreen Coating.",
  },
  {
    id: "headlight",
    name: "Headlight Restoration",
    summary: "Clarity brought back to yellowed, hazy lenses.",
    detail:
      "Oxidised lenses are wet-sanded, polished back to clarity and sealed so the haze does not return immediately.",
    points: ["Wet sanded and polished", "Sealed after restoration", "Brighter output at night"],
    wa: "Hi MRM, I'd like to book Headlight Restoration.",
  },
  {
    id: "engine",
    name: "Engine Bay Detailing",
    summary: "A careful degrease and dress of the engine bay.",
    detail:
      "Sensitive components are covered, the bay is degreased and cleaned, then plastics and hoses are dressed to a clean matte finish.",
    points: ["Electronics protected", "Degreased and cleaned", "Plastics and hoses dressed"],
    wa: "Hi MRM, I'd like to book Engine Bay Detailing.",
  },
  {
    id: "underbody",
    name: "Underbody Coating",
    summary: "A protective layer against moisture and road salt.",
    detail:
      "The underbody is cleaned and coated to slow corrosion and reduce road noise — worth doing before the rains.",
    points: ["Corrosion protection", "Cleaned before coating", "Quieter cabin"],
    wa: "Hi MRM, I'd like a quote for Underbody Coating.",
  },
  {
    id: "maintenance",
    name: "Maintenance Wash",
    summary: "The right way to keep a coated or wrapped car looking new.",
    detail:
      "A safe, two-bucket maintenance wash for protected cars — keeps coatings and film performing without adding wash marring.",
    points: ["Safe for coatings and PPF", "Two-bucket method", "Drying without marring"],
    image: IMG.studio,
    wa: "Hi MRM, I'd like to book a Maintenance Wash.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Talk to us",
    body: "Send a message on WhatsApp with your car and what you're after. We'll tell you what it actually needs.",
  },
  {
    step: "02",
    title: "Inspection",
    body: "The car is assessed in the studio under proper lighting so nothing gets missed before work starts.",
  },
  {
    step: "03",
    title: "Preparation",
    body: "Decontamination, correction and surface prep. This stage decides how the final result holds up.",
  },
  {
    step: "04",
    title: "Application",
    body: "Film, coating or wrap is installed panel by panel in a controlled indoor bay.",
  },
  {
    step: "05",
    title: "Handover",
    body: "Final inspection with you, plus straightforward aftercare advice for your finish.",
  },
];

export const WHY = [
  {
    title: "Indoor studio",
    body: "All work happens inside a controlled bay — no dust settling into fresh film or coating.",
  },
  {
    title: "Preparation first",
    body: "Nothing gets applied over dirty or damaged paint. Prep is the majority of the job.",
  },
  {
    title: "Panel-by-panel work",
    body: "Film and wrap are fitted panel by panel with wrapped edges, not rushed as one piece.",
  },
  {
    title: "Straight answers",
    body: "We tell you what your car needs and what it doesn't, before you commit to anything.",
  },
];

export const PPF_COVERAGE = [
  { name: "Full body", body: "Every painted panel covered, edges wrapped where possible." },
  { name: "Front end", body: "Bonnet, bumper, fenders and mirrors — where the chips happen." },
  { name: "High impact", body: "Bonnet strip, bumper, mirrors and door cups." },
  { name: "Custom", body: "Sills, door edges, boot lip, pillars or any area you want protected." },
];

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Protection", href: "#protection" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];
