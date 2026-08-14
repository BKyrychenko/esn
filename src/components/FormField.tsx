import { useId, useState, type ChangeEvent, type FocusEvent } from 'react'
import type { FieldSchema } from '../lib/formSchema'

const requiredMark = "after:ml-0.5 after:text-error after:content-['*']"

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-3 text-base text-ink placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-esn-blue/30'
const inputValid = 'border-slate-300 focus:border-esn-blue'
const inputInvalid = 'border-error focus:border-error focus:ring-error/25'

const optionRow =
  'flex cursor-pointer items-center gap-3 px-4 py-3 transition-colors hover:bg-slate-50'

const numberPrefixClasses = 'mr-1.5 font-semibold text-esn-blue'

type Props = {
  field: FieldSchema
  value?: string
  otherValue?: string
  onChange?: (value: string) => void
  onOtherChange?: (value: string) => void
}

export function FormField({ field, value, otherValue, onChange, onOtherChange }: Props) {
  const [error, setError] = useState<string | null>(null)
  const errorId = useId()

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const input = event.currentTarget
    setError(input.validity.valid ? null : input.validationMessage)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (error !== null) {
      const input = event.currentTarget
      setError(input.validity.valid ? null : input.validationMessage)
    }
  }

  if (field.type === 'radio-group') {
    return (
      <fieldset className="mb-6">
        <legend className={`mb-2 text-sm font-medium text-ink ${field.required ? requiredMark : ''}`}>
          {field.number && <span className={numberPrefixClasses}>{field.number}</span>}
          {field.label}
        </legend>
        <div className="divide-y divide-slate-200 rounded-lg border border-slate-300">
          {field.options.map((option) => (
            <label
              key={option.value}
              htmlFor={`${field.id}-${option.value}`}
              className={`${optionRow} ${value === option.value ? 'bg-esn-blue/5' : ''}`}
            >
              <input
                type="radio"
                id={`${field.id}-${option.value}`}
                name={field.name}
                value={option.value}
                required={field.required}
                checked={value === option.value}
                onChange={() => onChange?.(option.value)}
                className="h-5 w-5 cursor-pointer accent-esn-blue"
              />
              <span className="text-sm text-ink">{option.label}</span>
            </label>
          ))}
        </div>
        {field.other && value === field.other.value && (
          <div className="mt-3">
            <input
              type="text"
              placeholder={field.other.placeholder}
              name={field.other.otherName}
              required
              value={otherValue ?? ''}
              onChange={(event) => onOtherChange?.(event.target.value)}
              className={`${inputBase} ${inputValid}`}
            />
          </div>
        )}
      </fieldset>
    )
  }

  if (field.type === 'acknowledge') {
    return (
      <label
        htmlFor={field.id}
        className={`${optionRow} mb-4 rounded-lg border border-slate-300 last:mb-0`}
      >
        <input
          type="radio"
          id={field.id}
          name={field.name}
          value={field.value}
          required={field.required}
          className="mt-0.5 h-5 w-5 cursor-pointer accent-esn-blue"
        />
        <span className={`text-sm text-ink ${field.required ? requiredMark : ''}`}>
          {field.number && <span className={numberPrefixClasses}>{field.number}</span>}
          {field.label}
        </span>
      </label>
    )
  }

  return (
    <div className="mb-5">
      <label htmlFor={field.id} className={`mb-1.5 block text-sm font-medium text-ink ${field.required ? requiredMark : ''}`}>
        {field.number && <span className={numberPrefixClasses}>{field.number}</span>}
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.id}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        autoComplete={field.autoComplete}
        onBlur={handleBlur}
        onChange={handleChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${inputBase} ${error ? inputInvalid : inputValid}`}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  )
}
