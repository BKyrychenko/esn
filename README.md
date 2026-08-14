# ESN Geel Registration Form

ESNcard online registration form for ESN Geel, built with React + Vite + Tailwind CSS. On submit, it posts directly to a Google Form's `formResponse` endpoint client-side — no backend is required.

## Development

```
npm install
npm run dev
```

## Production build

```
npm run build
```

Outputs a static site to `dist/`, ready to be served by any static host.

## Updating the Google Form

The form field IDs (`entry.*`) and the target Google Form URL live in
[`src/forms/esncard/esncardSchema.ts`](src/forms/esncard/esncardSchema.ts). If the underlying
Google Form changes, update the values there — they must match the Form's field entry IDs
exactly, which you can find by inspecting the Form's own HTML/prefilled link.

## Project structure

- `src/lib/formSchema.ts` — shared field schema types (text/date, radio group with an optional
  "Other" free-text option, single-radio acknowledgements)
- `src/lib/useGoogleFormSubmit.ts` — reusable submit hook (validates, posts via `fetch`, tracks
  status) for posting any form to a Google Form endpoint
- `src/components/FormField.tsx` — generic field renderer driven by the schema above
- `src/forms/esncard/` — the ESNcard registration form itself: its field schema, hero header, and
  form component

The schema/hook/component split is intentional — future ESN forms can reuse `FormField` and
`useGoogleFormSubmit` instead of hand-building a new form from scratch.
