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

export function EsncardForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [hostUniversity, setHostUniversity] = useState('')
  const [hostUniversityOther, setHostUniversityOther] = useState('')
  const { submit, status, isSubmitting } = useGoogleFormSubmit(ESNCARD_FORM_ACTION)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const didSubmit = await submit(event.currentTarget)
    if (didSubmit) {
      event.currentTarget.reset()
      setHostUniversity('')
      setHostUniversityOther('')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} action={ESNCARD_FORM_ACTION} method="POST">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
        {esncardNameFields.map((field) => (
          <FormField key={field.id} field={field} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
        {esncardDetailFields.map((field) => (
          <FormField key={field.id} field={field} />
        ))}
      </div>

      <div className="mb-6">
        <p className="mb-3 text-sm text-muted">The university where you are doing your mobility.</p>
        <FormField
          field={hostUniversityField}
          value={hostUniversity}
          onChange={setHostUniversity}
          otherValue={hostUniversityOther}
          onOtherChange={setHostUniversityOther}
        />
      </div>

      <div className="mb-6">
        <p className="mb-3 text-sm leading-relaxed text-muted">
          To make the ESNcard online we need to be sure that you are an International Student in
          the Kempen (Geel, Turnhout or Vorselaar), therefore we require you to upload a proof so
          we can proceed with your card. For example: A print screen of the
          confirmation/acceptance email is enough. Please provide a link with such document. You
          can use upload services like:
        </p>
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2.5">
          {proofUploadLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-esn-blue/12 bg-esn-blue/8 px-2.5 py-1.5 font-semibold text-esn-blue no-underline hover:bg-esn-blue/14"
            >
              {link.label}
            </a>
          ))}
        </div>
        <FormField field={proofLinkField} />
      </div>

      <FormField field={gdprField} />
      <FormField field={paymentAwareField} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-2xl bg-[linear-gradient(135deg,#16366f_0%,#2153b5_55%,#2d6cdf_100%)] py-4 text-base font-extrabold tracking-wide text-white uppercase shadow-[0_18px_32px_rgba(33,83,181,0.24)] transition hover:-translate-y-px hover:shadow-[0_20px_36px_rgba(33,83,181,0.3)] disabled:cursor-progress disabled:opacity-70"
      >
        Get My ESNcard
      </button>
      <p role="status" aria-live="polite" className={`mt-4 text-sm ${statusColor[status.type]}`}>
        {status.message}
      </p>
    </form>
  )
}
