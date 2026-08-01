// Real, sourced Visakhapatnam market data (as of 2026) — used for the
// "Why Invest in Vizag" section. This is genuine city/market data, distinct
// from GLS Finvest's own company stats (which remain placeholder pending
// real business history — GLS Finvest is a new brand with no public track
// record to source).

export const marketStats = [
  { label: "Projected Housing Growth, 2026", value: "6–10%" },
  { label: "City GDP", value: "$43.5B" },
  { label: "Land Price Surge (Growth Corridors, '23–'26)", value: "30–50%" },
  { label: "India City Wealth Ranking", value: "#10" },
] as const;

export const infrastructureDrivers = [
  {
    title: "Bhogapuram International Airport",
    description:
      "The Alluri Sitarama Raju International Airport, connected via a six-lane highway to Beach Road, is set to handle 6–8 million passengers annually in its initial phase — already driving appreciation across the Bhogapuram corridor.",
  },
  {
    title: "Google Data Centre, Tarluvada",
    description:
      "A major tech-infrastructure investment reshaping demand in the Madhurawada–Tarluvada belt, alongside continued IT expansion from firms like Cognizant.",
  },
  {
    title: "Metro Rail & NH-16 Expansion",
    description:
      "Proposed metro rail and national highway upgrades are opening previously underdeveloped residential corridors across North Vizag.",
  },
  {
    title: "Fintech Valley Vizag",
    description:
      "A Government of Andhra Pradesh initiative since 2016 positioning the Rushikonda–Kapuluppada–Madhurawada belt as a financial-technology hub — driving sustained commercial demand.",
  },
] as const;

export const growthLocalities = [
  { name: "Madhurawada", note: "IT corridor, Google Data Centre proximity" },
  { name: "Anandapuram", note: "Plotted developments, strong appreciation" },
  { name: "Bhogapuram", note: "Airport-corridor capital appreciation" },
  { name: "Kommadi", note: "Residential demand near Madhurawada" },
  { name: "Bheemili", note: "Coastal, NRI investor interest" },
  { name: "Rushikonda", note: "Fintech Valley commercial corridor" },
] as const;
