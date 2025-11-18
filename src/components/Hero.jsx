import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

function Hero() {
  const scrollToLearn = () => {
    const el = document.getElementById("learn-more");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-indigo-500/10 to-blue-500/10" />
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/25 to-cyan-400/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/80 px-3 py-1 text-xs backdrop-blur ring-1 ring-white/20 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Playful learning
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Learn vocabulary like a mini‑game
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
            Quick rounds, bright vibes, and satisfying progress. Bite‑sized cards, adaptive practice, and rewarding streaks keep you coming back.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4">
            <button onClick={scrollToLearn} className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition-all">
              Start Learning
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <a href="#demo" className="text-white/80 hover:text-white underline underline-offset-4">
              See a quick demo
            </a>
          </div>
        </motion.div>

        <motion.div
          id="demo"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-slate-900/40 to-slate-900/20"
        >
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* subtle gradient edge */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
