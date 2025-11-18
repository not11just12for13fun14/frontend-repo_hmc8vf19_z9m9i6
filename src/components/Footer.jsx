function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-semibold text-lg">Get the app</h3>
            <p className="text-white/80 text-sm">Practice anywhere. Coming soon to iOS and Android.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-12 rounded-2xl px-4 bg-black text-white flex items-center gap-3 shadow hover:opacity-90 transition">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
            </button>
            <button className="h-12 rounded-2xl px-4 bg-black text-white flex items-center gap-3 shadow hover:opacity-90 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            </button>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/60">© {new Date().getFullYear()} VocabPlay. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
