import { createClient } from "@/lib/supabase/server";

export async function getHeroImages() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("hero_images")
    .select("*")
    .order("display_order", { ascending: true });

  return (data ?? []).map((h) => ({ url: h.photo_url, alt: "GLS Finvest" }));
}

export async function getProjects() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true });

  if (!projects) return [];

  const { data: highlights } = await supabase.from("project_highlights").select("*");

  return projects.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    location: p.location,
    area: p.area,
    priceFrom: p.price_from,
    status: p.status,
    photo: p.photo_url as string | null,
    highlights: (highlights ?? [])
      .filter((h) => h.project_id === p.id)
      .sort((a, b) => a.display_order - b.display_order)
      .map((h) => h.highlight),
  }));
}

export async function getServices() {
  const supabase = await createClient();
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("display_order", { ascending: true });

  if (!services) return [];

  return services.map((s) => ({
    slug: s.slug,
    title: s.title,
    cardDescription: s.card_description,
    icon: s.icon,
    photo: s.photo_url,
    heroTagline: s.hero_tagline,
    overview: s.overview,
  }));
}

export async function getServiceBySlug(slug: string) {
  const supabase = await createClient();
  const { data: service } = await supabase.from("services").select("*").eq("slug", slug).single();
  if (!service) return null;

  const [{ data: benefits }, { data: features }, { data: faqs }, { data: facts }] = await Promise.all([
    supabase.from("service_benefits").select("*").eq("service_id", service.id).order("display_order"),
    supabase.from("service_features").select("*").eq("service_id", service.id).order("display_order"),
    supabase.from("service_faqs").select("*").eq("service_id", service.id).order("display_order"),
    supabase.from("service_facts").select("*").eq("service_id", service.id).order("display_order"),
  ]);

  return {
    slug: service.slug,
    title: service.title,
    cardDescription: service.card_description,
    icon: service.icon,
    photo: service.photo_url,
    heroTagline: service.hero_tagline,
    overview: service.overview,
    benefits: (benefits ?? []).map((b) => b.benefit),
    features: (features ?? []).map((f) => ({ title: f.title, description: f.description })),
    faqs: (faqs ?? []).map((f) => ({ q: f.question, a: f.answer })),
    facts: (facts ?? []).map((f) => ({ label: f.label, value: f.value })),
  };
}

export async function getServiceSlugs() {
  const { createStaticClient } = await import("@/lib/supabase/static");
  const supabase = createStaticClient();
  const { data } = await supabase.from("services").select("slug");
  return (data ?? []).map((s) => ({ slug: s.slug }));
}

export async function getTeamMembers() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("team_members")
    .select("*")
    .order("display_order", { ascending: true });

  return (data ?? []).map((m) => ({
    name: m.name,
    role: m.role,
    bio: m.bio,
    photo: m.photo_url,
  }));
}

export async function getTestimonials() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("testimonials")
    .select("*")
    .order("display_order", { ascending: true });

  return (data ?? []).map((t) => ({
    name: t.name,
    role: t.role,
    quote: t.quote,
    rating: t.rating,
  }));
}

export async function getGalleryItems() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gallery_items")
    .select("*")
    .order("display_order", { ascending: true });

  return (data ?? []).map((g) => ({
    label: g.label,
    category: g.category,
    photo: g.photo_url,
    span: g.span as "large" | "tall" | "wide" | "normal",
  }));
}
