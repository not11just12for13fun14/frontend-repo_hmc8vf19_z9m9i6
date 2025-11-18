import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Flashcard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative perspective-[1200px] h-56 sm:h-64">
        <AnimatePresence initial={false}>
          {!flipped ? (
            <motion.button
              key="front"
              onClick={() => setFlipped(true)}
              className="absolute inset-0 w-full h-full select-none rounded-3xl bg-white/90 text-slate-900 shadow-xl ring-1 ring-slate-900/10 backdrop-blur"
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Tap to flip</div>
                <div className="text-4xl sm:text-5xl font-extrabold">猫</div>
                <div className="text-sm text-slate-600">Japanese</div>
              </div>
            </motion.button>
          ) : (
            <motion.button
              key="back"
              onClick={() => setFlipped(false)}
              className="absolute inset-0 w-full h-full select-none rounded-3xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-xl ring-1 ring-white/10"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -180, opacity: 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/80">Meaning</div>
                <div className="text-3xl sm:text-4xl font-extrabold">Cat</div>
                <div className="text-sm text-white/80">Tap to flip back</div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <button className="rounded-full bg-white/70 text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:bg-white transition">I forgot</button>
        <button className="rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-slate-800 transition">I knew it</button>
      </div>
    </div>
  );
}

export default Flashcard;
