import { EsncardForm } from './forms/esncard/EsncardForm'
import { EsncardHero } from './forms/esncard/EsncardHero'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.25),transparent_24%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.18),transparent_22%),linear-gradient(145deg,#eef6ff_0%,#f9fbff_48%,#fff3f8_100%)] px-4 pt-8 pb-16">
      <div className="relative w-full max-w-[760px] overflow-hidden rounded-[26px] border border-white/80 bg-white/94 p-6 shadow-[0_30px_80px_rgba(17,38,73,0.18)] backdrop-blur-md sm:p-10">
        <div className="absolute inset-x-0 top-0 h-2.5 bg-[linear-gradient(90deg,var(--color-esn-pink)_0_25%,var(--color-esn-orange)_25%_50%,var(--color-esn-green)_50%_75%,var(--color-esn-blue)_75%_100%)]" />
        <EsncardHero />
        <EsncardForm />
      </div>
    </div>
  )
}

export default App
