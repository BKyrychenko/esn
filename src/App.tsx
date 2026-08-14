import { EsncardForm } from './forms/esncard/EsncardForm'
import { EsncardHero } from './forms/esncard/EsncardHero'

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-50 px-4 py-12">
      {import.meta.env.DEV && (
        <div className="mb-4 w-full max-w-2xl rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-center text-sm font-medium text-amber-800">
          Development mode — submissions are not sent to Google Forms.
        </div>
      )}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="h-1 bg-[linear-gradient(90deg,var(--color-esn-pink)_0_25%,var(--color-esn-orange)_25%_50%,var(--color-esn-green)_50%_75%,var(--color-esn-blue)_75%_100%)]" />
        <div className="p-6 sm:p-10">
          <EsncardHero />
          <EsncardForm />
        </div>
      </div>
    </div>
  )
}

export default App
