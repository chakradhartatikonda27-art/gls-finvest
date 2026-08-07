import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { HeroImageForm } from "@/components/admin/hero-image-form";
import { updateHeroImage } from "../../actions";

export default async function EditHeroImagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: image } = await supabase.from("hero_images").select("*").eq("id", id).single();
  if (!image) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Edit Hero Photo</h1>
      <div className="mt-6">
        <HeroImageForm initial={image} onSubmit={updateHeroImage.bind(null, id)} />
      </div>
    </div>
  );
}
