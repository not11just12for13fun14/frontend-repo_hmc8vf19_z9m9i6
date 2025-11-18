import { motion } from "framer-motion";
import { Flame, Zap, Trophy } from "lucide-react";

function Progress() {
  const xp = 340; // demo
  const goal = 500;
  const percent = Math.min(100, Math.round((xp / goal) * 100));

  return (
    <section className="relative" id="learn-more">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Your progress, visualized</h2>
            <p className="mt-3 text-white/80">Earn XP by reviewing cards, keep your daily streak alive, and unlock shiny badges. Everything nudges you to come back for just one more round.</p>

            <div className="mt-6 p-5 rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-inner">
              <div className="flex items-center justify-between text-sm text-white/80">
                <span>XP</span>
                <span>{xp} / {goal}</span>
              </div>
              <div className="mt-2 h-3 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-white/80">
                <Flame className="h-5 w-5 text-orange-400" /> <span>Streak: 7 days</span>
                <Zap className="h-5 w-5 text-yellow-300" /> <span>Daily goal: 80%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Trophy, title: "Rookie", desc: "First steps" },
              { icon: Trophy, title: "Combo", desc: "3-day streak" },
              { icon: Trophy, title: "Scholar", desc: "500 XP" },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ y: 18, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-4 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10 text-center"
              >
                <b.icon className="mx-auto h-7 w-7 text-yellow-300" />
                <div className="mt-2 text-white font-semibold">{b.title}</div>
                <div className="text-xs text-white/70">{b.desc}</div>
              </motion.div>
            ))}

            <div className="col-span-3 mt-2">
              <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
                <div className="text-sm text-white/80">Keep it up! Next badge unlocks at <span className="font-semibold text-white">600 XP</span>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Progress;
