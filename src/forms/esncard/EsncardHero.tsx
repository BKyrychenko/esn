const ESN_LOGO_URL = 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20ESN%20AISBL.png'

export function EsncardHero() {
  return (
    <header className="mb-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <img src={ESN_LOGO_URL} alt="ESN Geel" className="h-10 w-auto" />
        <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium tracking-wide text-muted uppercase">
          2025–2026
        </span>
      </div>

      <h1 className="mb-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        ESNcard Registration
      </h1>
      <p className="text-sm text-muted">
        For international students on exchange in the Kempen. Fields marked with an asterisk are
        required.
      </p>
    </header>
  )
}
