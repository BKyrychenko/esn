import { useCallback, useState } from 'react'

type SubmitStatus = {
  type: 'idle' | 'success' | 'error'
  message: string
}

export function useGoogleFormSubmit(actionUrl: string) {
  const [status, setStatus] = useState<SubmitStatus>({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = useCallback(
    async (form: HTMLFormElement) => {
      setStatus({ type: 'idle', message: '' })

      if (!form.reportValidity()) {
        setStatus({ type: 'error', message: 'Please check the required fields.' })
        return false
      }

      setIsSubmitting(true)
      try {
        const formData = new FormData(form)

        if (import.meta.env.DEV) {
          console.info(
            '[dev] Skipping real Google Forms submission — payload that would have been sent:',
            Object.fromEntries(formData.entries()),
          )
          await new Promise((resolve) => setTimeout(resolve, 400))
        } else {
          await fetch(actionUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
          })
        }

        setStatus({
          type: 'success',
          message: "Thanks — your registration has been submitted. We'll be in touch if we need anything else.",
        })
        return true
      } catch (error) {
        console.error('Google Form submission failed:', error)
        setStatus({
          type: 'error',
          message: 'Submission failed. Check the browser console for details.',
        })
        return false
      } finally {
        setIsSubmitting(false)
      }
    },
    [actionUrl],
  )

  return { submit, status, isSubmitting }
}
