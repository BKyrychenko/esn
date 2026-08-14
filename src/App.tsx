import { BrandStrip } from './components/BrandStrip'
import { Footer } from './components/Footer'
import { SocialLinks } from './components/SocialLinks'
import { EsncardForm } from './forms/esncard/EsncardForm'
import { EsncardHero } from './forms/esncard/EsncardHero'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <BrandStrip />

      <header className="flex justify-end px-4 py-4 sm:px-6">
        <SocialLinks />
      </header>

      <div className="flex flex-1 flex-col items-center px-4 pb-12">
        <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-6 sm:p-10">
            <EsncardHero />
            <EsncardForm />
          </div>
        </div>

        {import.meta.env.DEV && (
          <div className="mt-4 w-full max-w-2xl rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-center text-sm font-medium text-amber-800">
            Development mode — submissions are not sent to Google Forms.
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App
