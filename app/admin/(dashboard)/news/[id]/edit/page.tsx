import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { NewsForm } from "@/components/admin/news-form";
import { updateNewsItem } from "../../actions";

export default async function EditNewsItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: item } = await supabase.from("news_items").select("*").eq("id", id).single();
  if (!item) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Edit News Item</h1>
      <div className="mt-6">
        <NewsForm initial={item} onSubmit={(input) => updateNewsItem(id, input)} />
      </div>
    </div>
  );
}
