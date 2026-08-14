import type { FieldSchema } from '../lib/formSchema'

const inputClasses =
  'w-full rounded-2xl border border-ink/10 bg-white/95 px-4 py-3.5 text-base transition duration-200 focus:-translate-y-px focus:border-esn-blue/45 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.12)] focus:outline-none'

const requiredLabelClasses = "after:ml-1 after:text-error after:content-['*']"

type Props = {
  field: FieldSchema
  value?: string
  otherValue?: string
  onChange?: (value: string) => void
  onOtherChange?: (value: string) => void
}

export function FormField({ field, value, otherValue, onChange, onOtherChange }: Props) {
  if (field.type === 'radio-group') {
    return (
      <div className="mb-6">
        <label className={`mb-2 block text-sm font-bold text-ink ${field.required ? requiredLabelClasses : ''}`}>
          {field.label}
        </label>
        <div className="space-y-3">
          {field.options.map((option) => (
            <div
              key={option.value}
              className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-gradient-to-br from-white/95 to-[#f7faff]/90 p-4"
            >
              <input
                type="radio"
                id={`${field.id}-${option.value}`}
                name={field.name}
                value={option.value}
                required={field.required}
                checked={value === option.value}
                onChange={() => onChange?.(option.value)}
                className="mt-1 h-[1.1rem] w-[1.1rem] cursor-pointer accent-esn-blue"
              />
              <label
                htmlFor={`${field.id}-${option.value}`}
                className="cursor-pointer text-sm font-medium text-ink"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {field.other && value === field.other.value && (
          <div className="mt-3">
            <input
              type="text"
              name={field.other.otherName}
              placeholder={field.other.placeholder}
              required
              value={otherValue ?? ''}
              onChange={(event) => onOtherChange?.(event.target.value)}
              className={inputClasses}
            />
          </div>
        )}
      </div>
    )
  }

  if (field.type === 'acknowledge') {
    return (
      <div className="mb-6 flex items-start gap-3 rounded-2xl border border-ink/10 bg-gradient-to-br from-white/95 to-[#f7faff]/90 p-4">
        <input
          type="radio"
          id={field.id}
          name={field.name}
          value={field.value}
          required={field.required}
          className="mt-1 h-[1.1rem] w-[1.1rem] cursor-pointer accent-esn-blue"
        />
        <label
          htmlFor={field.id}
          className={`cursor-pointer text-sm font-medium text-ink ${field.required ? requiredLabelClasses : ''}`}
        >
          {field.label}
        </label>
      </div>
    )
  }

  return (
    <div className="mb-6">
      <label
        htmlFor={field.id}
        className={`mb-2 block text-sm font-bold text-ink ${field.required ? requiredLabelClasses : ''}`}
      >
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.id}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        className={inputClasses}
      />
    </div>
  )
}
