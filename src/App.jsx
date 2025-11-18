import Hero from "./components/Hero";
import Flashcard from "./components/Flashcard";
import Progress from "./components/Progress";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
      {/* soft starry pattern */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(1px_1px_at_20px_20px,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* NAV */}
      <header className="relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-lg shadow-fuchsia-500/25" />
            <span className="font-extrabold tracking-tight">VocabPlay</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm text-white/80">
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">About</a>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />

        {/* Demo card section */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Try a quick flip</h2>
                <p className="mt-3 text-white/80">Tap the card to reveal the meaning. Small, delightful interactions and short rounds keep focus high and friction low.</p>
              </div>
              <div className="order-1 md:order-2">
                <Flashcard />
              </div>
            </div>
          </div>
        </section>

        <Progress />
        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;
