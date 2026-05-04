/*
  Google Apps Script for the static form.

  How to use:
  1. Open https://script.google.com/
  2. Create a new project
  3. Paste this file into Code.gs
  4. Replace SHEET_ID and SHEET_NAME
  5. Deploy as Web App
     - Execute as: Me
     - Who has access: Anyone
  6. Copy the Web App URL into public/config.js -> appsScriptUrl
*/

const SHEET_ID = "1yL9K64XA7FrzdjshsHUq3rGEN01LT6A-Og7JK2aAauc";
const SHEET_NAME = "Лист1";
const REQUIRED_FIELDS = ["fullName", "phone"];
const FIELD_ORDER = ["fullName", "phone", "email", "comment"];
const DUPLICATE_WINDOW_MS = 60 * 1000;

function doPost(e) {
  try {
    const payload = normalizePayload_(e);

    if (payload.website) {
      return jsonResponse_({ ok: false, message: "Bot submission blocked." });
    }

    const validationError = validatePayload_(payload);
    if (validationError) {
      return jsonResponse_({ ok: false, message: validationError });
    }

    if (isDuplicateSubmission_(payload)) {
      return jsonResponse_({ ok: false, message: "Duplicate submission blocked." });
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" not found.`);
    }

    const row = [new Date().toISOString()];
    for (const field of FIELD_ORDER) {
      row.push(sanitizeForSheet_(payload[field] || ""));
    }

    sheet.appendRow(row);

    return jsonResponse_({ ok: true, message: "Saved" });
  } catch (error) {
    return jsonResponse_({ ok: false, message: error.message || "Server error" });
  }
}

function normalizePayload_(e) {
  const data = {};
  const params = e && e.parameter ? e.parameter : {};

  Object.keys(params).forEach((key) => {
    data[key] = String(params[key] || "").trim();
  });

  return data;
}

function validatePayload_(payload) {
  for (const field of REQUIRED_FIELDS) {
    if (!payload[field]) {
      return `Field "${field}" is required.`;
    }
  }

  if (payload.phone && !/^[0-9+()\-\s]{7,30}$/.test(payload.phone)) {
    return "Phone format is invalid.";
  }

  if (
    payload.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)
  ) {
    return "Email format is invalid.";
  }

  return "";
}

function sanitizeForSheet_(value) {
  const cleaned = String(value).replace(/\0/g, "").slice(0, 1000).trim();
  if (/^[=+\-@]/.test(cleaned)) {
    return `'${cleaned}`;
  }
  return cleaned;
}

function isDuplicateSubmission_(payload) {
  const cache = CacheService.getScriptCache();
  const fingerprint = Utilities.base64EncodeWebSafe(
    Utilities.computeDigest(
      Utilities.DigestAlgorithm.SHA_256,
      JSON.stringify(payload)
    )
  );

  const existing = cache.get(fingerprint);
  if (existing) {
    return true;
  }

  cache.put(fingerprint, "1", Math.floor(DUPLICATE_WINDOW_MS / 1000));
  return false;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
