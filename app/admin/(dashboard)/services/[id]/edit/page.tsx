import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ServiceForm } from "@/components/admin/service-form";
import { updateService } from "../../actions";

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: service } = await supabase.from("services").select("*").eq("id", id).single();
  if (!service) notFound();

  const { data: benefits } = await supabase
    .from("service_benefits")
    .select("benefit")
    .eq("service_id", id)
    .order("display_order", { ascending: true });

  const { data: features } = await supabase
    .from("service_features")
    .select("title, description")
    .eq("service_id", id)
    .order("display_order", { ascending: true });

  const { data: faqs } = await supabase
    .from("service_faqs")
    .select("question, answer")
    .eq("service_id", id)
    .order("display_order", { ascending: true });

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Edit Service</h1>
      <div className="mt-6">
        <ServiceForm
          initial={{
            slug: service.slug,
            title: service.title,
            card_description: service.card_description,
            icon: service.icon,
            photo_url: service.photo_url,
            hero_tagline: service.hero_tagline,
            overview: service.overview,
            benefits: (benefits ?? []).map((b) => b.benefit),
            features: features ?? [],
            faqs: faqs ?? [],
          }}
          onSubmit={updateService.bind(null, id)}
        />
      </div>
    </div>
  );
}
