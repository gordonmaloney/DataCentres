import { create } from "zustand";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vStFa8N2MA8-xj3tgf2DxTRghHrnX0_mQGXvEIwbXUsNRu1HXozU9KTruljCeJ3-SICNS_JctKQ502z/pub?output=csv";

/**
 * Parse a raw CSV string into an array of objects.
 * Handles quoted fields (including fields with embedded newlines/commas).
 */
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        // Escaped quote
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        row.push(field);
        field = "";
      } else if (ch === "\n") {
        row.push(field);
        field = "";
        rows.push(row);
        row = [];
      } else if (ch === "\r") {
        // skip carriage returns
      } else {
        field += ch;
      }
    }
  }
  // flush last field / row
  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  if (rows.length < 2) return [];

  const headers = rows[0];
  return rows.slice(1).map((cells, idx) => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h.trim()] = (cells[i] || "").trim();
    });
    return obj;
  });
}

/**
 * Convert a coordinate string like "55.791389°, -3.975482°" to [lat, lng].
 */
function parseCoordinates(coordStr) {
  if (!coordStr) return null;
  const cleaned = coordStr.replace(/°/g, "").trim();
  const parts = cleaned.split(",").map((s) => parseFloat(s.trim()));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts;
  }
  return null;
}

/**
 * Convert a raw CSV row object to the map data shape the app expects.
 */
function rowToMapEntry(row, index) {
  const position = parseCoordinates(row["coordinates"]);
  if (!position) return null;

  return {
    id: index + 1,
    name: row["Site Name"] || `Site ${index + 1}`,
    position,
    localAuthority: row["Location (Local Authority)"] || "",
    developer: row["Developer"] || "",
    capacityMW: row["Capacity MW"] || "",
    planningRef: row["Planning Reference"] || "",
    blurb: row["Blurb for Gordon"] || "",
  };
}

export const useStore = create((set) => ({
  signatures: 14205, // Mock starting number
  loading: false,

  // Map Data
  mapData: [],
  isLoadingMap: false,

  fetchMapData: async () => {
    set({ isLoadingMap: true });
    try {
      const response = await fetch(SHEET_CSV_URL);
      const text = await response.text();
      const rows = parseCSV(text);
      const mapData = rows
        .map((row, i) => rowToMapEntry(row, i))
        .filter(Boolean);
      set({ mapData, isLoadingMap: false });
    } catch (err) {
      console.error("Failed to fetch map data from Google Sheets:", err);
      set({ isLoadingMap: false });
    }
  },

  incrementSignatures: () =>
    set((state) => ({ signatures: state.signatures + 1 })),

  // Future state for form submission
  objectionForm: {
    name: "",
    email: "",
    objection: "",
  },
  setObjectionForm: (data) =>
    set((state) => ({
      objectionForm: { ...state.objectionForm, ...data },
    })),
}));
