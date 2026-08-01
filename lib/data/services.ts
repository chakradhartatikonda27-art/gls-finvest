export type ServiceIcon = "building" | "map" | "trendingUp" | "wallet" | "handshake" | "home";

export type Service = {
  slug: string;
  title: string;
  /** 2-3 line card copy for the homepage grid */
  cardDescription: string;
  icon: ServiceIcon;
  /** dedicated page content — placeholder professional copy, refine with real positioning before launch */
  heroTagline: string;
  overview: string[];
  benefits: string[];
  features: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-commercial-real-estate",
    title: "Residential & Commercial Real Estate",
    cardDescription:
      "Premium residential layouts, commercial spaces, open plots, and gated community properties — with complete legal support and transparent transactions.",
    icon: "building",
    heroTagline: "Property You Can Actually Trust the Paperwork On",
    overview: [
      "Buying residential or commercial real estate is as much a legal transaction as a financial one — and that's where most buyers get exposed. GLS Finvest handles both sides: sourcing verified residential layouts, commercial spaces, open plots, and gated community properties, and clearing every title and approval before it reaches you.",
      "We work across ready-to-move apartments, under-construction residential projects, retail and office commercial space, and DTCP/HMDA-approved plotted developments — matched to your budget, timeline, and intended use, whether that's a home, a rental asset, or a commercial lease.",
    ],
    benefits: [
      "Every title verified before it's shown to you, not after you've committed",
      "RERA-registered projects only — no exceptions",
      "Transparent, itemized pricing with no hidden charges at registration",
      "Dedicated point of contact from first visit through handover",
    ],
    features: [
      { title: "Residential Apartments", description: "Gated apartment communities with clubhouse, security, and long-term appreciation potential." },
      { title: "Commercial Spaces", description: "Grade-A retail and office space in high-footfall and IT-corridor locations." },
      { title: "Open Plots", description: "DTCP/HMDA-approved plotted developments for ownership-first buyers." },
      { title: "Gated Communities", description: "Villa and apartment communities with shared amenities and 24/7 security." },
    ],
    faqs: [
      { q: "How do I start investing with GLS Finvest?", a: "Book a free consultation — we discuss your budget, goals, and timeline, then shortlist properties that actually fit before we schedule a single site visit." },
      { q: "How do you verify properties before listing them?", a: "Every property goes through in-house legal review covering title chain, encumbrance certificate, and applicable approvals (RERA/DTCP/HMDA) before it's shown to a client." },
      { q: "Do you provide legal support during the purchase?", a: "Yes — legal review, documentation, and registration assistance are included as part of the transaction, not billed as a separate add-on." },
      { q: "Can I schedule a site visit before deciding?", a: "Always — we encourage it. Site visits can be booked directly through consultation or by calling our office." },
      { q: "How long does the buying process typically take?", a: "For ready properties with clean titles, 3–5 weeks from agreement to registration is typical; under-construction or financed purchases can take longer depending on your bank's timeline." },
    ],
  },
  {
    slug: "land-villa-investments",
    title: "Land & Villa Plot Investments",
    cardDescription:
      "High-growth land opportunities and premium villa plots designed for long-term wealth creation and future appreciation.",
    icon: "map",
    heroTagline: "Land Doesn't Depreciate. Poor Diligence Does.",
    overview: [
      "Land and villa plot investment rewards patience and punishes shortcuts. GLS Finvest identifies plotted developments and villa communities in corridors with real infrastructure momentum — not just marketing renders — and takes every acquisition through the same legal diligence as our built-property transactions.",
      "Whether you're building a primary residence, a second home, or simply parking capital in an appreciating asset, we structure the acquisition around your horizon: outright purchase, phased investment, or portfolio allocation alongside our other verticals.",
    ],
    benefits: [
      "Growth-corridor locations selected on infrastructure data, not speculation",
      "Clear, single-owner title chains — no joint-family or disputed-inheritance land",
      "Flexible plot sizes from investment-entry to full villa-build scale",
      "Post-purchase support through construction planning if you choose to build",
    ],
    features: [
      { title: "Investment Plots", description: "Entry-level plotted land in emerging growth corridors, sized for capital appreciation." },
      { title: "Premium Villa Plots", description: "Larger plots in gated villa communities, ready for custom home construction." },
      { title: "Agricultural & Farm Land", description: "Select farm and agricultural land parcels for long-horizon holding." },
      { title: "Portfolio Structuring", description: "Land positioned as one component of a broader real estate and investment portfolio." },
    ],
    faqs: [
      { q: "How do I start investing in land or villa plots?", a: "We begin with your budget and horizon, then shortlist plots with clean titles and genuine growth-corridor positioning — not just proximity marketing." },
      { q: "How do you verify land titles?", a: "Full title chain review, encumbrance certificate check, and confirmation of DTCP/local authority approval before any plot is presented to a client." },
      { q: "Do you provide legal support for land purchases?", a: "Yes, identical to our built-property transactions — documentation, verification, and registration assistance included." },
      { q: "Can I visit the plot before deciding?", a: "Yes — site visits are a standard part of our process, arranged directly through your consultation." },
      { q: "How long does a land purchase take?", a: "Typically 2–4 weeks for a clean, ready title; longer if the parcel requires additional approval clearance." },
    ],
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    cardDescription:
      "Professional investment planning and portfolio guidance to help maximize returns while minimizing risks.",
    icon: "trendingUp",
    heroTagline: "Portfolio Decisions, Made With Your Numbers, Not Ours",
    overview: [
      "Investment advisory at GLS Finvest spans real estate and growth-stage venture positions, structured around your actual risk tolerance and timeline rather than a one-size-fits-all product pitch.",
      "We review your existing holdings, income goals, and liquidity needs before recommending anything — and every recommendation comes with the legal and financial diligence already done, not left for you to chase down afterward.",
    ],
    benefits: [
      "Portfolio structured to your risk profile, not a fixed product menu",
      "Real estate and venture capital positions reviewed under the same diligence standard",
      "Ongoing portfolio reporting, not a one-time recommendation",
      "Advisors with 15+ years operating in the same market they're advising on",
    ],
    features: [
      { title: "Portfolio Assessment", description: "A full review of your current holdings, goals, and risk tolerance before any recommendation." },
      { title: "Diversification Planning", description: "Structuring capital across real estate and venture positions to balance growth and stability." },
      { title: "Risk Analysis", description: "Clear-eyed assessment of downside scenarios before capital is committed, not after." },
      { title: "Ongoing Review", description: "Scheduled portfolio check-ins as market conditions and your goals evolve." },
    ],
    faqs: [
      { q: "How do I start with investment advisory?", a: "Book a consultation — we review your current position and goals before recommending a single instrument." },
      { q: "How do you verify the opportunities you recommend?", a: "Every real estate or venture position goes through the same legal and financial diligence, whether it's a property title or a startup's cap table." },
      { q: "Do you provide legal support on recommended investments?", a: "Yes — documentation and legal review are part of the advisory relationship, not a separate service." },
      { q: "Can I discuss my portfolio in person?", a: "Yes, consultations can be scheduled in person at our office or over a call." },
      { q: "How long before I see a structured portfolio plan?", a: "Most clients receive a structured recommendation within 1–2 weeks of the initial consultation." },
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    cardDescription:
      "Customized financial consulting, business financial solutions, and assistance tailored to individual and corporate investment needs.",
    icon: "wallet",
    heroTagline: "Financial Planning That Accounts for the Whole Picture",
    overview: [
      "Financial services at GLS Finvest covers the consulting layer that sits underneath a good investment decision — cash flow planning, financing structure for property purchases, and business financial solutions for corporate clients building out a real estate or investment position.",
      "We work with both individuals structuring a major purchase and businesses evaluating capital deployment, bringing the same transparency standard we apply across every other vertical.",
    ],
    benefits: [
      "Financing structure reviewed against your actual cash flow, not a generic template",
      "Corporate and individual consulting under one team, one standard",
      "Clear disclosure of costs and terms before any commitment",
      "Coordination with legal and property teams so financing and acquisition move together",
    ],
    features: [
      { title: "Personal Financial Consulting", description: "Cash flow and financing planning for individual property or investment purchases." },
      { title: "Corporate Financial Solutions", description: "Structured financial consulting for businesses evaluating real estate or capital deployment." },
      { title: "Financing Coordination", description: "Support navigating loan structuring and documentation alongside your property purchase." },
      { title: "Ongoing Financial Review", description: "Periodic check-ins as your financial position and goals change." },
    ],
    faqs: [
      { q: "How do I start with financial consulting?", a: "Book a consultation — we review your current financial position before recommending any structure." },
      { q: "How do you verify the solutions you recommend?", a: "Every recommendation is reviewed against your actual cash flow and documentation, not a standard product template." },
      { q: "Do you provide legal support alongside financial planning?", a: "Yes, our financial and legal teams coordinate directly so financing and documentation move together." },
      { q: "Can I schedule an in-person consultation?", a: "Yes, in-person and phone consultations are both available." },
      { q: "How long does financial structuring typically take?", a: "Initial structuring is usually complete within 1–3 weeks, depending on documentation and financing complexity." },
    ],
  },
  {
    slug: "property-consulting",
    title: "Property Consulting",
    cardDescription:
      "Complete property consulting including property identification, documentation, legal verification, registration assistance, and transaction support.",
    icon: "handshake",
    heroTagline: "The Consulting Layer Between 'Interested' and 'Owned'",
    overview: [
      "Property consulting is the connective work between deciding you want a property and actually owning it cleanly — identification, documentation, legal verification, registration, and transaction support, handled as one coordinated process rather than five separate headaches.",
      "This service is built for buyers who want a single point of accountability through the entire purchase, rather than juggling a broker, a lawyer, and a registration agent separately.",
    ],
    benefits: [
      "One team accountable for identification through registration",
      "Legal verification completed before you're asked to commit",
      "Documentation handled to reduce delays at the registrar's office",
      "Transaction support that continues through possession, not just signing",
    ],
    features: [
      { title: "Property Identification", description: "Shortlisting properties that actually match your requirements and budget." },
      { title: "Documentation Support", description: "Preparing and reviewing every document required for a clean transaction." },
      { title: "Legal Verification", description: "Title, encumbrance, and approval checks before you commit to a property." },
      { title: "Registration Assistance", description: "Coordinated support through the registration process itself." },
    ],
    faqs: [
      { q: "How do I start with property consulting?", a: "Book a consultation to share your requirements — we begin identification once your budget and criteria are clear." },
      { q: "How do you verify a property before recommending it?", a: "Full title chain, encumbrance certificate, and approval verification, completed before the property is presented to you." },
      { q: "Do you handle registration directly?", a: "We coordinate and support the registration process alongside you — you're never navigating the registrar's office alone." },
      { q: "Can I request a site visit as part of consulting?", a: "Yes, site visits are included as part of the identification and evaluation process." },
      { q: "How long does end-to-end consulting typically take?", a: "From initial identification to registration, most transactions complete within 4–6 weeks." },
    ],
  },
  {
    slug: "end-to-end-real-estate",
    title: "End-to-End Real Estate Solutions",
    cardDescription:
      "A complete one-stop solution for property buying, investment planning, documentation, legal services, and post-purchase support.",
    icon: "home",
    heroTagline: "One Team, Every Stage, One Standard",
    overview: [
      "End-to-end real estate solutions is the umbrella service for clients who want a single relationship covering the whole journey — property buying, investment planning, documentation, legal services, and post-purchase support — instead of coordinating separate vendors at every stage.",
      "This is the right fit if you're not just buying one property but building a relationship with a team that will be there for the next purchase, the next investment, and the support in between.",
    ],
    benefits: [
      "Single point of contact across buying, financing, legal, and after-sales",
      "Consistent legal and diligence standard applied at every stage",
      "Post-purchase support that doesn't end at registration",
      "Long-term relationship built for repeat and portfolio clients",
    ],
    features: [
      { title: "Property Buying", description: "Full support from shortlisting through registration, across residential and commercial." },
      { title: "Investment Planning", description: "Portfolio-level guidance spanning real estate and venture positions." },
      { title: "Documentation & Legal", description: "Complete documentation and legal verification handled in-house." },
      { title: "Post-Purchase Support", description: "Ongoing support after handover — from maintenance coordination to resale guidance." },
    ],
    faqs: [
      { q: "How do I start with end-to-end services?", a: "Book a consultation — we scope your full journey, not just the immediate transaction, before proposing a plan." },
      { q: "How do you verify properties across every stage?", a: "The same legal and title verification standard applies whether it's your first purchase or your fifth." },
      { q: "Do you provide legal support throughout?", a: "Yes — legal support is continuous across buying, documentation, and any post-purchase matters." },
      { q: "Can I request a site visit at any stage?", a: "Yes, site visits are available whenever you're evaluating a new property within the relationship." },
      { q: "How long does the full relationship typically span?", a: "This is designed as an ongoing relationship — individual transactions close in weeks, but the relationship continues for as long as you're investing." },
    ],
  },
];
