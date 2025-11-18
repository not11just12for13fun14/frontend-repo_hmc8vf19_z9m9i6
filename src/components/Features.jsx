import { motion } from "framer-motion";
import { BrainCircuit, Repeat2, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Adaptive Learning",
    desc: "Cards adjust to you. Mastered words show less, tricky ones show up just in time.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Repeat2,
    title: "Spaced Repetition",
    desc: "Scientifically timed reviews lock knowledge into long‑term memory.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Gamepad2,
    title: "Gamified Flow",
    desc: "XP, streaks, and delightful micro‑wins keep motivation high.",
    gradient: "from-emerald-400 to-lime-400",
  },
];

function Features() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">How it sticks</h2>
          <p className="mt-3 text-white/80">A lightweight loop that balances challenge and reward, tuned for high retention.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-3xl p-6 bg-white/5 ring-1 ring-white/10 shadow-sm"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-lg shadow-black/10`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
