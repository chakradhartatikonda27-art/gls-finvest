import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteGalleryItem } from "./actions";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  const { data: items } = await supabase
    .from("gallery_items")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Gallery</h1>
          <p className="mt-1 text-sm text-white/60">{items?.length ?? 0} total</p>
        </div>
        <Link
          href="/admin/gallery/new"
          className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-4 py-2 text-sm transition-colors"
        >
          + Add Gallery Item
        </Link>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5 text-left text-white/60">
              <th className="px-4 py-3 font-medium">Label</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Span</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(items ?? []).map((g) => (
              <tr key={g.id} className="border-t border-white/10 text-white/90">
                <td className="px-4 py-3">{g.label}</td>
                <td className="px-4 py-3 text-white/60">{g.category}</td>
                <td className="px-4 py-3 text-white/60">{g.span}</td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link href={`/admin/gallery/${g.id}/edit`} className="text-[#C79B42] hover:underline">
                    Edit
                  </Link>
                  <DeleteButton id={g.id} action={deleteGalleryItem} label="gallery item" />
                </td>
              </tr>
            ))}
            {(!items || items.length === 0) && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-white/40">
                  No gallery items yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
