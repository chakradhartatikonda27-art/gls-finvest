// Real, sourced facts relevant to each service — Andhra Pradesh stamp duty
// structure, current home loan rate ranges (India, 2026), and registration
// process facts. Rates are indicative and change with lender/RBI policy —
// each display carries a "verify before transacting" note.

export const serviceFacts: Record<string, { label: string; value: string }[]> = {
  "residential-commercial-real-estate": [
    { label: "Stamp Duty (AP)", value: "5% of property value" },
    { label: "Registration Fee", value: "1% of property value" },
    { label: "Transfer Duty", value: "1.5% of property value" },
  ],
  "land-villa-investments": [
    { label: "Total Statutory Charges", value: "~7.5% of value" },
    { label: "Approval Authority", value: "DTCP / VMRDA" },
    { label: "Value Basis", value: "Higher of market or guideline rate" },
  ],
  "investment-advisory": [
    { label: "Vizag Housing Growth (2026E)", value: "6–10%" },
    { label: "Growth-Corridor Land Surge ('23–'26)", value: "30–50%" },
    { label: "City GDP", value: "$43.5B" },
  ],
  "financial-services": [
    { label: "Home Loan Rates (2026)", value: "7.10%–8.50% p.a.*" },
    { label: "Typical Max Loan-to-Value", value: "Up to 90%" },
    { label: "Ideal CIBIL Score", value: "750+" },
  ],
  "property-consulting": [
    { label: "Registration Authority", value: "Sub-Registrar Office (IGRS AP)" },
    { label: "Governing Law", value: "Registration Act, 1908" },
    { label: "Total Statutory Cost", value: "~7.5% of value" },
  ],
  "end-to-end-real-estate": [
    { label: "Total Statutory Charges", value: "~7.5% of value" },
    { label: "Typical Home Loan Range", value: "7.10%–8.50% p.a.*" },
    { label: "Vizag Housing Growth (2026E)", value: "6–10%" },
  ],
};
