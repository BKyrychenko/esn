import type { FieldSchema } from '../../lib/formSchema'

export const ESNCARD_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSchgRqsqd-JkbmLhGaylVNZJ1pM0BnAP-5xImrgRh2Yu4JVMg/formResponse'

export const HOST_UNIVERSITY_FIELD_ID = 'host-university'
export const HOST_UNIVERSITY_OTHER_VALUE = '__other_option__'

export const esncardNameFields: FieldSchema[] = [
  {
    type: 'text',
    id: 'firstName',
    name: 'entry.1642576935',
    label: 'First Name',
    placeholder: 'e.g., John',
    required: true,
    autoComplete: 'given-name',
  },
  {
    type: 'text',
    id: 'lastName',
    name: 'entry.1677634720',
    label: 'Last Name',
    placeholder: 'e.g., De Graef',
    required: true,
    autoComplete: 'family-name',
  },
]

export const esncardDetailFields: FieldSchema[] = [
  {
    type: 'text',
    id: 'nationality',
    name: 'entry.879975281',
    label: 'Nationality',
    placeholder: 'e.g., Belgian',
    required: true,
  },
  {
    type: 'date',
    id: 'dob',
    name: 'entry.2042252171',
    label: 'Birthdate',
    required: true,
    autoComplete: 'bday',
  },
]

export const hostUniversityField: FieldSchema = {
  type: 'radio-group',
  id: HOST_UNIVERSITY_FIELD_ID,
  name: 'entry.1255840749',
  label: 'Host University',
  required: true,
  options: [
    {
      label: 'Thomas More Kempen (Geel, Turnhout, Vorselaar)',
      value: 'Thomas More Kempen (Geel, Turnhout, Vorselaar)',
    },
    { label: 'KU Leuven campus Geel', value: 'KU Leuven campus Geel' },
    { label: 'Other', value: HOST_UNIVERSITY_OTHER_VALUE },
  ],
  other: {
    value: HOST_UNIVERSITY_OTHER_VALUE,
    otherName: 'entry.1255840749.other_option_response',
    placeholder: 'Type your university if you selected Other',
  },
}

export const proofLinkField: FieldSchema = {
  type: 'text',
  id: 'proofLink',
  name: 'entry.1189397582',
  label: 'Link with proof of exchange',
  placeholder: 'https://...',
  required: true,
}

export const gdprField: FieldSchema = {
  type: 'acknowledge',
  id: 'gdpr',
  name: 'entry.204283393',
  value: 'I understand and accept',
  label: 'ESN Geel is GDPR compliant. I understand and accept.',
  required: true,
}

export const paymentAwareField: FieldSchema = {
  type: 'acknowledge',
  id: 'paymentAware',
  name: 'entry.677780983',
  value: "Yes, I'm aware",
  label: 'I\'m aware that I will find the payment information after I press "submit".',
  required: true,
}
