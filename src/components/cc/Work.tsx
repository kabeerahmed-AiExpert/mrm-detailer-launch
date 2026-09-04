import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { CLIPS, type Clip } from "@/lib/cc/assets";
import { Reveal, SectionLabel } from "./Reveal";

function ClipCard({ clip }: { clip: Clip }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className="group relative overflow-hidden border border-border bg-surface">
      <video
        ref={ref}
        src={clip.src}
        poster={clip.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={clip.alt}
        onClick={toggle}
        className="aspect-[4/5] w-full cursor-pointer object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:aspect-[3/4]"
      />
      <button
        onClick={toggle}
        aria-label={playing ? `Pause ${clip.title}` : `Play ${clip.title}`}
        className="absolute top-4 right-4 flex size-11 items-center justify-center border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:border-brand hover:text-brand"
      >
        {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
      </button>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5 pt-14">
        <p className="font-display text-lg tracking-tight">{clip.title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{clip.caption}</p>
      </figcaption>
    </figure>
  );
}

export function Work() {
  return (
    <section id="work" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <SectionLabel>From the studio</SectionLabel>
          <h2 className="font-display mt-5 max-w-3xl text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight">
            Real cars, real <span className="chrome-text">work</span>.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Everything below was filmed in our bay in Karachi — no stock footage.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLIPS.map((clip, i) => (
            <Reveal key={clip.id} delay={i * 0.06}>
              <ClipCard clip={clip} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
