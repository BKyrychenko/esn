import { useRef, useState } from 'react'
import { FormField } from '../../components/FormField'
import { useGoogleFormSubmit } from '../../lib/useGoogleFormSubmit'
import {
  ESNCARD_FORM_ACTION,
  esncardDetailFields,
  esncardNameFields,
  gdprField,
  hostUniversityField,
  paymentAwareField,
  proofLinkField,
} from './esncardSchema'

const proofUploadLinks = [
  { label: 'Imgur Upload', href: 'https://imgur.com/upload' },
  { label: 'WeTransfer', href: 'https://wetransfer.com/' },
  { label: 'ImgBB', href: 'https://imgbb.com/' },
]

const statusColor = {
  idle: 'text-muted',
  success: 'text-[#166534]',
  error: 'text-error',
} as const

const sectionKicker = 'mb-3 text-xs font-semibold tracking-wide text-esn-blue uppercase'
const section = 'border-t border-slate-200 pt-6 mt-6 first:mt-0 first:border-0 first:pt-0'

export function EsncardForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [hostUniversity, setHostUniversity] = useState('')
  const [hostUniversityOther, setHostUniversityOther] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const { submit, status, isSubmitting } = useGoogleFormSubmit(ESNCARD_FORM_ACTION)

  function syncFormValidity() {
    setIsFormValid(formRef.current?.checkValidity() ?? false)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const didSubmit = await submit(event.currentTarget)
    if (didSubmit) {
      event.currentTarget.reset()
      setHostUniversity('')
      setHostUniversityOther('')
      setIsFormValid(false)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={syncFormValidity}
      onInput={syncFormValidity}
      action={ESNCARD_FORM_ACTION}
      method="POST"
    >
      <section className={section}>
        <p className={sectionKicker}>1. Personal details</p>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
          {esncardNameFields.map((field) => (
            <FormField key={field.id} field={field} />
          ))}
          {esncardDetailFields.map((field) => (
            <FormField key={field.id} field={field} />
          ))}
        </div>
      </section>

      <section className={section}>
        <p className={sectionKicker}>2. Host university</p>
        <p className="mb-3 text-sm text-muted">The university where you are doing your mobility.</p>
        <FormField
          field={hostUniversityField}
          value={hostUniversity}
          onChange={setHostUniversity}
          otherValue={hostUniversityOther}
          onOtherChange={setHostUniversityOther}
        />
      </section>

      <section className={section}>
        <p className={sectionKicker}>3. Proof of exchange</p>
        <p className="mb-3 text-sm text-muted">
          We need to confirm you're an international student in the Kempen (Geel, Turnhout or
          Vorselaar) before issuing your card. A screenshot of your acceptance/confirmation email
          is enough — upload it to one of these services and paste the link below.
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {proofUploadLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-esn-blue hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
        </div>
        <FormField field={proofLinkField} />
      </section>

      <section className={section}>
        <p className={sectionKicker}>Confirmation</p>
        <FormField field={gdprField} />
        <FormField field={paymentAwareField} />
      </section>

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`mt-8 w-full rounded-lg py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
          isFormValid && !isSubmitting
            ? 'bg-esn-blue text-white hover:bg-esn-blue/90 focus-visible:outline-esn-blue'
            : 'cursor-not-allowed bg-slate-200 text-slate-400'
        } ${isSubmitting ? 'cursor-progress' : ''}`}
      >
        {isSubmitting ? 'Submitting…' : 'Get My ESNcard'}
      </button>
      <p role="status" aria-live="polite" className={`mt-3 text-sm ${statusColor[status.type]}`}>
        {status.message}
      </p>
    </form>
  )
}
