import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMen, setIsMen] = useState(true);

  let menOpacity = 1;
  let womenOpacity = 0;
  if (!isMen) {
    menOpacity = 0;
    womenOpacity = 1;
  }

  let menScale = 1.08;
  let womenScale = 1;
  if (!isMen) {
    menScale = 1;
    womenScale = 1.08;
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.img
        src="https://wallpapercave.com/wp/wp14474685.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top -z-10"
        animate={{ opacity: menOpacity, scale: menScale }}
        transition={{ opacity: { duration: 0.7 }, scale: { duration: 24, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }}
      />
      <motion.img
        src="https://barcahoy.com/data/fotosno/2025-03-12-fcbfemenivsrmadrid-101.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top -z-10"
        animate={{ opacity: womenOpacity, scale: womenScale }}
        transition={{ opacity: { duration: 0.7 }, scale: { duration: 24, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-red-400/30 -z-10" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Barcelona In and Out
        </h1>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center rounded-xl border px-4 py-2 text-white border-white/80 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95" onClick={() => setIsMen(true)} aria-pressed={isMen}>
            Men
          </button>
          <button className="inline-flex items-center rounded-xl border px-4 py-2 text-white border-white/80 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95" onClick={() => setIsMen(false)} aria-pressed={!isMen}>
            Femeni
          </button>
        </div>
      </motion.div>
    </section>
  );
}
