import logoWhite from "@/assets/logo-mrm-white.png.asset.json";
import logoBlack from "@/assets/logo-mrm-black.png.asset.json";
import v1 from "@/assets/mrm-1.mp4.asset.json";
import v2 from "@/assets/mrm-2.mp4.asset.json";
import v3 from "@/assets/mrm-3.mp4.asset.json";
import v4 from "@/assets/mrm-4.mp4.asset.json";
import p1 from "@/assets/poster-1.jpg.asset.json";
import p2 from "@/assets/poster-2.jpg.asset.json";
import p3 from "@/assets/poster-3.jpg.asset.json";
import p4 from "@/assets/poster-4.jpg.asset.json";
import stillHero from "@/assets/still-hero.jpg.asset.json";
import stillPpf from "@/assets/still-ppf.jpg.asset.json";
import stillPpf2 from "@/assets/still-ppf2.jpg.asset.json";
import stillStudio from "@/assets/still-studio.jpg.asset.json";
import stillDetail from "@/assets/still-detail.jpg.asset.json";
import stillWork from "@/assets/still-work.jpg.asset.json";

export const IMG = {
  logoWhite: logoWhite.url,
  logoBlack: logoBlack.url,
  hero: stillHero.url,
  ppf: stillPpf.url,
  ppf2: stillPpf2.url,
  studio: stillStudio.url,
  detail: stillDetail.url,
  work: stillWork.url,
};

export type Clip = {
  id: string;
  src: string;
  poster: string;
  title: string;
  caption: string;
  alt: string;
};

/** Videos filmed at the MRM Car Detailing studio in Karachi. */
export const CLIPS: Clip[] = [
  {
    id: "clip-2",
    src: v2.url,
    poster: p2.url,
    title: "PPF Installation",
    caption: "Paint protection film applied panel by panel inside the studio.",
    alt: "White SUV having paint protection film installed at MRM Car Detailing",
  },
  {
    id: "clip-1",
    src: v1.url,
    poster: p1.url,
    title: "Black SUV Protection",
    caption: "Film work and finishing on a black SUV.",
    alt: "Black SUV being worked on at the MRM Car Detailing studio in Karachi",
  },
  {
    id: "clip-3",
    src: v3.url,
    poster: p3.url,
    title: "Full Body Coverage",
    caption: "Film squeegeed across the bonnet, roof and rear panels.",
    alt: "Silver SUV with paint protection film applied at MRM Car Detailing",
  },
  {
    id: "clip-4",
    src: v4.url,
    poster: p4.url,
    title: "Detailing & Finish",
    caption: "Exterior detailing and finishing on a pickup.",
    alt: "White pickup truck being detailed at MRM Car Detailing in Karachi",
  },
];

/** Hero background clip. */
export const HERO_CLIP = CLIPS[0]!;
