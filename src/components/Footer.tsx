import { FaSnowflake } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className="bg-neutral-800 px-4 py-10 sm:px-6">
      <div className="flex max-w-2xl flex-col gap-4">
        <span className="inline-flex w-fit items-center gap-2 rounded-md bg-neutral-700 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
          <FaSnowflake className="h-3.5 w-3.5" aria-hidden="true" />
          About us
        </span>

        <p className="text-sm leading-relaxed text-neutral-400">
          Erasmus Student Network (ESN) is a non-profit international student organisation. Our
          mission is to represent international students, thus provide opportunities for cultural
          understanding and self-development under the principle of students helping students.
        </p>
      </div>
    </footer>
  )
}
