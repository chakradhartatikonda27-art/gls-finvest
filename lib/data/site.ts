export const site = {
  name: "GLS Finvest",
  legalName: "GLS Finvest Pvt Ltd",
  founded: 2009,
  tagline: "Invest Today. Shape Tomorrow.",
  heroHeadline: "Building Wealth Since 2009",
  heroSubheadline:
    "Your trusted partner in financial growth and total real estate solutions.",
  description:
    "GLS Finvest Pvt Ltd is a diversified investment house delivering real estate development, property consulting, and growth-stage venture investment — built on 15+ years of disciplined execution.",
  phone: "+91 90000 00000",
  phoneDisplay: "+91 90000 00000",
  whatsapp: "919000000000",
  email: "invest@glsfinvest.com",
  address: {
    line1: "GLS Finvest Tower, Beach Road",
    line2: "Visakhapatnam, Andhra Pradesh 530003",
    country: "India",
  },
  hours: [
    { day: "Monday – Saturday", time: "9:30 AM – 6:30 PM" },
    { day: "Sunday", time: "By appointment only" },
  ],
  social: {
    linkedin: "#",
    instagram: "#",
    twitter: "#",
    facebook: "#",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Investment", href: "/investment" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
