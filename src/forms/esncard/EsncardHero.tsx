const ESN_LOGO_URL = 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20ESN%20AISBL.png'

export function EsncardHero() {
  return (
    <section className="relative -mx-2 mb-8 -mt-2 rounded-3xl border border-white/75 bg-[linear-gradient(135deg,rgba(255,255,255,0.84),rgba(255,255,255,0.56)),linear-gradient(120deg,rgba(236,72,153,0.08),rgba(37,99,235,0.08))] p-6">
      <div className="mb-6 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-[1.7fr_minmax(220px,0.7fr)]">
        <div
          className="flex min-h-[136px] items-center justify-center rounded-2xl bg-white/92 p-4 shadow-[0_12px_24px_rgba(16,32,51,0.12)]"
          aria-label="ESN GEEL logo"
        >
          <img src={ESN_LOGO_URL} alt="ESN Geel logo" className="block h-auto w-full max-w-[320px]" />
        </div>

        <div className="flex min-h-[136px] min-w-[170px] flex-col items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03)),linear-gradient(135deg,#182338,#203a72_60%,#1554c3_100%)] p-4 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
          <small className="block text-[0.72rem] uppercase tracking-[0.16em] opacity-80">
            Official Card Flow
          </small>
          <strong className="mt-1.5 block text-base tracking-[0.08em]">ESNcard 2025-2026</strong>
        </div>
      </div>

      <header className="text-left">
        <h1 className="mb-3 max-w-[12ch] text-[clamp(2.2rem,4vw,3.35rem)] leading-[0.95] font-extrabold tracking-[-0.05em] text-ink">
          ESNcard Online Registration
        </h1>
        <p className="max-w-[58ch] text-base leading-relaxed text-muted">
          Join the Erasmus Generation and submit your ESNcard request with a brighter,
          card-inspired experience built for ESN Geel.
        </p>
        <div className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-white/76 px-3.5 py-2.5 text-[0.86rem] font-bold tracking-wide text-[#1e3a8a] uppercase">
          <span className="inline-flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-esn-pink" />
            <span className="h-2.5 w-2.5 rounded-full bg-esn-orange" />
            <span className="h-2.5 w-2.5 rounded-full bg-esn-green" />
            <span className="h-2.5 w-2.5 rounded-full bg-esn-blue" />
          </span>
          ESN Geel Registration
        </div>
      </header>
    </section>
  )
}
