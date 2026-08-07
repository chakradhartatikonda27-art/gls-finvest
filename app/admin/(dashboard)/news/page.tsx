import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteNewsItem } from "./actions";

export default async function AdminNewsPage() {
  const supabase = await createClient();
  const { data: items } = await supabase
    .from("news_items")
    .select("*")
    .order("published_date", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">News</h1>
          <p className="mt-1 text-sm text-white/60">{items?.length ?? 0} total</p>
        </div>
        <Link
          href="/admin/news/new"
          className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-4 py-2 text-sm transition-colors"
        >
          + Add News Item
        </Link>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5 text-left text-white/60">
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(items ?? []).map((n) => (
              <tr key={n.id} className="border-t border-white/10 text-white/90">
                <td className="px-4 py-3">{n.title}</td>
                <td className="px-4 py-3 text-white/60">{n.category}</td>
                <td className="px-4 py-3 text-white/60">{n.published_date}</td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link href={`/admin/news/${n.id}/edit`} className="text-[#C79B42] hover:underline">
                    Edit
                  </Link>
                  <DeleteButton id={n.id} action={deleteNewsItem} label="news item" />
                </td>
              </tr>
            ))}
            {(!items || items.length === 0) && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-white/40">
                  No news items yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
