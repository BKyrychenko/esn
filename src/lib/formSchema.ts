export type TextFieldSchema = {
  type: 'text' | 'email' | 'date'
  id: string
  name: string
  label: string
  required?: boolean
  placeholder?: string
}

export type RadioOption = {
  label: string
  value: string
}

export type OtherOption = {
  value: string
  otherName: string
  placeholder?: string
}

export type RadioGroupFieldSchema = {
  type: 'radio-group'
  id: string
  name: string
  label: string
  required?: boolean
  options: RadioOption[]
  other?: OtherOption
}

export type AcknowledgeFieldSchema = {
  type: 'acknowledge'
  id: string
  name: string
  label: string
  value: string
  required?: boolean
}

export type FieldSchema = TextFieldSchema | RadioGroupFieldSchema | AcknowledgeFieldSchema
