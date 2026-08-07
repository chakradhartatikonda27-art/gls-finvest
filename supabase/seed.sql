-- GLS Finvest — Seed data
-- Migrates everything currently in lib/data/*.ts into the database, so the
-- admin panel starts with real content instead of an empty database.
-- Run this in Supabase Dashboard → SQL Editor → New Query, AFTER schema.sql.

-- ============================================================
-- SITE SETTINGS
-- ============================================================
insert into site_settings (id, legal_name, tagline, hero_headline, hero_subheadline, description, phone, email, address_line1, address_line2, whatsapp, linkedin_url, instagram_url, facebook_url, twitter_url, youtube_url)
values (
  1,
  'GLS Finvest Pvt Ltd',
  'Invest Today. Shape Tomorrow.',
  'Building Wealth Since 2009',
  'Your trusted partner in financial growth and total real estate solutions.',
  'GLS Finvest Pvt Ltd is a diversified investment house delivering real estate development, property consulting, and growth-stage venture investment — built on 15+ years of disciplined execution.',
  '+91 90000 00000',
  'invest@glsfinvest.com',
  'GLS Finvest Tower, Beach Road',
  'Visakhapatnam, Andhra Pradesh 530003',
  '919000000000',
  '#', '#', '#', '#', '#'
)
on conflict (id) do nothing;

-- ============================================================
-- PROJECTS
-- ============================================================
insert into projects (slug, name, category, location, area, price_from, status, image_category, display_order) values
  ('gls-horizon-heights', 'GLS Horizon Heights', 'Residential', 'MVP Colony, Visakhapatnam', '1,450 – 2,600 sq.ft', '₹95 Lakh onwards', 'Ongoing', 'Residential', 0),
  ('gls-serene-meadows', 'GLS Serene Meadows', 'Villas', 'Bheemunipatnam Road, Visakhapatnam', '2,800 – 4,200 sq.ft', '₹1.8 Cr onwards', 'Ongoing', 'Villas', 1),
  ('gls-business-square', 'GLS Business Square', 'Commercial', 'Rushikonda IT Corridor, Visakhapatnam', '500 – 12,000 sq.ft', 'On Request', 'Upcoming', 'Commercial', 2),
  ('gls-emerald-fields', 'GLS Emerald Fields', 'Open Plots', 'Anandapuram, Visakhapatnam', '1,200 – 3,000 sq.ft', '₹18 Lakh onwards', 'Ongoing', 'Open Plots', 3)
on conflict (slug) do nothing;

insert into project_highlights (project_id, highlight, display_order)
select id, h.highlight, h.ord
from projects, unnest(array['Sea-facing towers', 'Established residential hub', 'RERA registered']) with ordinality as h(highlight, ord)
where slug = 'gls-horizon-heights'
union all
select id, h.highlight, h.ord
from projects, unnest(array['Gated villa community', 'Bheemili coastal growth corridor', '24/7 security']) with ordinality as h(highlight, ord)
where slug = 'gls-serene-meadows'
union all
select id, h.highlight, h.ord
from projects, unnest(array['Grade-A office space', 'Fintech Valley Vizag corridor', 'Flexible floor plates']) with ordinality as h(highlight, ord)
where slug = 'gls-business-square'
union all
select id, h.highlight, h.ord
from projects, unnest(array['DTCP approved', 'High-appreciation growth locality', 'Gated layout with amenities']) with ordinality as h(highlight, ord)
where slug = 'gls-emerald-fields';

-- ============================================================
-- SERVICES
-- ============================================================
insert into services (slug, title, card_description, icon, photo_url, hero_tagline, overview, display_order) values
  ('residential-commercial-real-estate', 'Residential & Commercial Real Estate', 'Premium residential layouts, commercial spaces, open plots, and gated community properties — with complete legal support.', 'building', 'https://images.unsplash.com/photo-1759845565036-cbecbcfcb8e2', 'Property You Can Trust the Paperwork On', 'We source verified residential, commercial, and plotted properties — and clear every title before it reaches you.', 0),
  ('land-villa-investments', 'Land & Villa Plot Investments', 'High-growth land opportunities and premium villa plots for long-term wealth creation.', 'map', 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35', E'Land Doesn\'t Depreciate. Poor Diligence Does.', 'We identify plotted developments and villa communities in genuine growth corridors — every title cleared first.', 1),
  ('investment-advisory', 'Investment Advisory', 'Professional investment planning and portfolio guidance to maximize returns while minimizing risk.', 'trendingUp', 'https://images.unsplash.com/photo-1743178207584-4a0c1109975e', 'Portfolio Decisions, Made With Your Numbers', 'Advisory spanning real estate and venture positions, structured around your actual risk tolerance and timeline.', 2),
  ('financial-services', 'Financial Services', 'Customized financial consulting and business solutions for individual and corporate needs.', 'wallet', 'https://images.unsplash.com/photo-1694730652852-9404a2d0214b', 'Financial Planning for the Whole Picture', 'Cash flow planning and financing structure for property purchases — for individuals and businesses alike.', 3),
  ('property-consulting', 'Property Consulting', 'Complete consulting: identification, documentation, legal verification, and registration support.', 'handshake', 'https://images.unsplash.com/photo-1521791136064-7986c2920216', E'From \'Interested\' to \'Owned\'', 'One coordinated process — identification, documentation, legal verification, and registration — one team accountable throughout.', 4),
  ('end-to-end-real-estate', 'End-to-End Real Estate Solutions', 'A complete one-stop solution: buying, investment planning, documentation, and post-purchase support.', 'home', 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9', 'One Team, Every Stage', 'A single relationship covering buying, investment planning, documentation, and post-purchase support.', 5)
on conflict (slug) do nothing;

-- Benefits
insert into service_benefits (service_id, benefit, display_order)
select id, b.benefit, b.ord from services, unnest(array['Title verified before you commit', 'RERA-registered only', 'No hidden charges']) with ordinality as b(benefit, ord) where slug = 'residential-commercial-real-estate'
union all
select id, b.benefit, b.ord from services, unnest(array['Growth-corridor locations', 'Clear, single-owner titles', 'Flexible plot sizes']) with ordinality as b(benefit, ord) where slug = 'land-villa-investments'
union all
select id, b.benefit, b.ord from services, unnest(array['Structured to your risk profile', 'Same diligence on every asset class', 'Ongoing reporting']) with ordinality as b(benefit, ord) where slug = 'investment-advisory'
union all
select id, b.benefit, b.ord from services, unnest(array['Financing matched to real cash flow', 'One team, one standard', 'Clear cost disclosure']) with ordinality as b(benefit, ord) where slug = 'financial-services'
union all
select id, b.benefit, b.ord from services, unnest(array['One team, start to finish', 'Verified before you commit', 'Support through possession']) with ordinality as b(benefit, ord) where slug = 'property-consulting'
union all
select id, b.benefit, b.ord from services, unnest(array['One contact, every stage', 'Consistent diligence throughout', 'Support after registration']) with ordinality as b(benefit, ord) where slug = 'end-to-end-real-estate';

-- Features
insert into service_features (service_id, title, description, display_order)
select id, f.title, f.description, f.ord from services,
  (values
    ('Residential Apartments', 'Gated communities with clubhouse and security.', 1),
    ('Commercial Spaces', 'Grade-A retail and office in prime corridors.', 2),
    ('Open Plots', 'DTCP/HMDA-approved plotted developments.', 3),
    ('Gated Communities', 'Villas and apartments with 24/7 security.', 4)
  ) as f(title, description, ord)
where slug = 'residential-commercial-real-estate'
union all
select id, f.title, f.description, f.ord from services,
  (values
    ('Investment Plots', 'Entry-level land in emerging corridors.', 1),
    ('Premium Villa Plots', 'Ready for custom home construction.', 2),
    ('Farm Land', 'Select parcels for long-horizon holding.', 3),
    ('Portfolio Structuring', 'Land as part of a broader portfolio.', 4)
  ) as f(title, description, ord)
where slug = 'land-villa-investments'
union all
select id, f.title, f.description, f.ord from services,
  (values
    ('Portfolio Assessment', 'Full review before any recommendation.', 1),
    ('Diversification', 'Balance across real estate and ventures.', 2),
    ('Risk Analysis', 'Downside reviewed before capital moves.', 3),
    ('Ongoing Review', 'Scheduled portfolio check-ins.', 4)
  ) as f(title, description, ord)
where slug = 'investment-advisory'
union all
select id, f.title, f.description, f.ord from services,
  (values
    ('Personal Consulting', 'Cash flow planning for major purchases.', 1),
    ('Corporate Solutions', 'For businesses evaluating capital deployment.', 2),
    ('Financing Coordination', 'Loan structuring support.', 3),
    ('Ongoing Review', 'Check-ins as your position changes.', 4)
  ) as f(title, description, ord)
where slug = 'financial-services'
union all
select id, f.title, f.description, f.ord from services,
  (values
    ('Identification', 'Shortlisting that matches your criteria.', 1),
    ('Documentation', 'Every document reviewed and prepared.', 2),
    ('Legal Verification', 'Title and approval checks upfront.', 3),
    ('Registration', 'Coordinated support at the registrar.', 4)
  ) as f(title, description, ord)
where slug = 'property-consulting'
union all
select id, f.title, f.description, f.ord from services,
  (values
    ('Property Buying', 'Shortlisting through registration.', 1),
    ('Investment Planning', 'Portfolio-level guidance.', 2),
    ('Documentation & Legal', 'Handled fully in-house.', 3),
    ('Post-Purchase Support', 'Ongoing support after handover.', 4)
  ) as f(title, description, ord)
where slug = 'end-to-end-real-estate';

-- FAQs
insert into service_faqs (service_id, question, answer, display_order)
select id, f.question, f.answer, f.ord from services,
  (values
    ('How do I start?', 'Book a free consultation — we shortlist properties around your budget and goals before any site visit.', 1),
    ('How are properties verified?', E'Full title, encumbrance, and RERA/DTCP approval review before it\'s ever shown to a client.', 2),
    ('How long does buying take?', '3–5 weeks for a clean, ready title from agreement to registration.', 3)
  ) as f(question, answer, ord)
where slug = 'residential-commercial-real-estate'
union all
select id, f.question, f.answer, f.ord from services,
  (values
    ('How do I start?', 'We match your budget and horizon to plots with clean titles and real growth-corridor positioning.', 1),
    ('How are titles verified?', 'Full title chain and encumbrance check before any plot is presented.', 2),
    ('How long does it take?', 'Typically 2–4 weeks for a clean, ready title.', 3)
  ) as f(question, answer, ord)
where slug = 'land-villa-investments'
union all
select id, f.question, f.answer, f.ord from services,
  (values
    ('How do I start?', 'We review your current position and goals before recommending anything.', 1),
    ('How are opportunities verified?', E'Same legal and financial diligence, whether it\'s a title or a cap table.', 2),
    ('How soon is a plan ready?', 'Most clients get a structured plan within 1–2 weeks.', 3)
  ) as f(question, answer, ord)
where slug = 'investment-advisory'
union all
select id, f.question, f.answer, f.ord from services,
  (values
    ('How do I start?', 'Book a consultation — we review your position before recommending a structure.', 1),
    ('How are solutions verified?', 'Reviewed against your actual cash flow, not a template.', 2),
    ('How long does structuring take?', 'Usually 1–3 weeks depending on complexity.', 3)
  ) as f(question, answer, ord)
where slug = 'financial-services'
union all
select id, f.question, f.answer, f.ord from services,
  (values
    ('How do I start?', 'Share your requirements — we begin identification once your budget is clear.', 1),
    ('How is a property verified?', 'Full title, encumbrance, and approval check before you see it.', 2),
    ('How long does it take?', 'Most transactions close in 4–6 weeks.', 3)
  ) as f(question, answer, ord)
where slug = 'property-consulting'
union all
select id, f.question, f.answer, f.ord from services,
  (values
    ('How do I start?', 'We scope your full journey before proposing a plan.', 1),
    ('Is verification consistent?', E'Same standard whether it\'s your first purchase or fifth.', 2),
    ('How long does the relationship last?', 'As long as you''re investing — transactions close in weeks.', 3)
  ) as f(question, answer, ord)
where slug = 'end-to-end-real-estate';

-- Service facts (Good to Know strip)
insert into service_facts (service_id, label, value, display_order)
select id, f.label, f.value, f.ord from services,
  (values ('Stamp Duty (AP)', '5% of property value', 1), ('Registration Fee', '1% of property value', 2), ('Transfer Duty', '1.5% of property value', 3)) as f(label, value, ord)
where slug = 'residential-commercial-real-estate'
union all
select id, f.label, f.value, f.ord from services,
  (values ('Total Statutory Charges', '~7.5% of value', 1), ('Approval Authority', 'DTCP / VMRDA', 2), ('Value Basis', 'Higher of market or guideline rate', 3)) as f(label, value, ord)
where slug = 'land-villa-investments'
union all
select id, f.label, f.value, f.ord from services,
  (values ('Vizag Housing Growth (2026E)', '6–10%', 1), (E'Growth-Corridor Land Surge (\'23-\'26)', '30–50%', 2), ('City GDP', '$43.5B', 3)) as f(label, value, ord)
where slug = 'investment-advisory'
union all
select id, f.label, f.value, f.ord from services,
  (values ('Home Loan Rates (2026)', '7.10%–8.50% p.a.*', 1), ('Typical Max Loan-to-Value', 'Up to 90%', 2), ('Ideal CIBIL Score', '750+', 3)) as f(label, value, ord)
where slug = 'financial-services'
union all
select id, f.label, f.value, f.ord from services,
  (values ('Registration Authority', 'Sub-Registrar Office (IGRS AP)', 1), ('Governing Law', 'Registration Act, 1908', 2), ('Total Statutory Cost', '~7.5% of value', 3)) as f(label, value, ord)
where slug = 'property-consulting'
union all
select id, f.label, f.value, f.ord from services,
  (values ('Total Statutory Charges', '~7.5% of value', 1), ('Typical Home Loan Range', '7.10%–8.50% p.a.*', 2), ('Vizag Housing Growth (2026E)', '6–10%', 3)) as f(label, value, ord)
where slug = 'end-to-end-real-estate';

-- ============================================================
-- TEAM
-- ============================================================
insert into team_members (name, role, bio, photo_url, display_order) values
  ('Ravi Chandra Naidu', 'Chief Executive Officer', E'15+ years steering GLS Finvest\'s real estate and investment strategy across Visakhapatnam.', 'https://images.unsplash.com/photo-1758518729058-b158e71c5a9b', 0),
  ('Priya Sharma', 'Chief Financial Officer', 'Oversees financial structuring, compliance, and reporting across every transaction.', 'https://images.unsplash.com/photo-1758518727888-ffa196002e59', 1),
  ('Arjun Mehta', 'Investment Advisor', 'Structures portfolio strategy across real estate and venture-stage opportunities.', 'https://images.unsplash.com/photo-1649433658557-54cf58577c68', 2),
  ('Sneha Reddy', 'Legal & Property Expert', 'Leads title verification, documentation, and regulatory compliance in-house.', 'https://images.unsplash.com/photo-1556157382-97eda2d62296', 3);

-- ============================================================
-- TESTIMONIALS
-- ============================================================
insert into testimonials (name, role, quote, rating, display_order) values
  ('Ramesh Kumar', 'Homeowner, GLS Horizon Heights', 'The clarity on titles and RERA documentation was what closed the deal for me. No surprises at registration — exactly what was promised on day one.', 5, 0),
  ('Priya Anand', 'Investor, Open Plots Portfolio', E'I\'ve bought through three developers before GLS. This was the first time the site visit, the paperwork, and the handover all matched.', 5, 1),
  ('Suresh Reddy', 'Founder, portfolio venture', 'GLS came in as a growth investor, not just a check-writer. Their advisory on structuring the next round saved us months.', 5, 2);

-- ============================================================
-- GALLERY
-- ============================================================
insert into gallery_items (label, category, photo_url, span, display_order) values
  ('City Skyline, Visakhapatnam', 'Real Estate', 'https://images.unsplash.com/photo-1771450092348-5f33e2cc2963', 'large', 0),
  ('Luxury Villa Living', 'Villas', 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35', 'tall', 1),
  ('Grade-A Office Space', 'Commercial', 'https://images.unsplash.com/photo-1743178207584-4a0c1109975e', 'normal', 2),
  ('Residential Towers', 'Residential', 'https://images.unsplash.com/photo-1768638687896-35bde623d532', 'normal', 3),
  ('Portfolio Growth', 'Financial Growth', 'https://images.unsplash.com/photo-1534951009808-766178b47a4f', 'wide', 4),
  ('Plotted Land Development', 'Land Investments', 'https://images.unsplash.com/photo-1694730652852-9404a2d0214b', 'normal', 5),
  ('Client Handover', 'Milestones', 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9', 'normal', 6),
  ('Deal Closed', 'Partnerships', 'https://images.unsplash.com/photo-1521791136064-7986c2920216', 'tall', 7),
  ('Advisory in Session', 'Business Meetings', 'https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b', 'wide', 8);
