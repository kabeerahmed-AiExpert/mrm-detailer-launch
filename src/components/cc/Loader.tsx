import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { IMG } from "@/lib/cc/assets";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }
    let value = 0;
    const timer = window.setInterval(() => {
      value = Math.min(100, value + Math.random() * 18 + 8);
      setProgress(Math.round(value));
      if (value >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setDone(true), 420);
      }
    }, 130);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={IMG.logoWhite}
            alt="MRM Car Detailing"
            width={900}
            height={392}
            className="h-16 w-auto object-contain md:h-20"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <p className="label-xs mt-5">Karachi</p>
          <div className="mt-8 h-px w-56 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-brand"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.15 }}
            />
          </div>
          <p className="label-xs mt-3 text-brand">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
