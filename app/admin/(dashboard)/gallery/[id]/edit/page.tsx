import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { GalleryForm } from "@/components/admin/gallery-form";
import { updateGalleryItem } from "../../actions";

export default async function EditGalleryItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: item } = await supabase.from("gallery_items").select("*").eq("id", id).single();
  if (!item) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Edit Gallery Item</h1>
      <div className="mt-6">
        <GalleryForm initial={item} onSubmit={(input) => updateGalleryItem(id, input)} />
      </div>
    </div>
  );
}
