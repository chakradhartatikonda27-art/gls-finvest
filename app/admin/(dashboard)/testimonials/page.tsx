import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteTestimonial } from "./actions";

export default async function AdminTestimonialsPage() {
  const supabase = await createClient();
  const { data: items } = await supabase
    .from("testimonials")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Testimonials</h1>
          <p className="mt-1 text-sm text-white/60">{items?.length ?? 0} total</p>
        </div>
        <Link
          href="/admin/testimonials/new"
          className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-4 py-2 text-sm transition-colors"
        >
          + Add Testimonial
        </Link>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5 text-left text-white/60">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Rating</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(items ?? []).map((t) => (
              <tr key={t.id} className="border-t border-white/10 text-white/90">
                <td className="px-4 py-3">{t.name}</td>
                <td className="px-4 py-3 text-white/60">{t.role}</td>
                <td className="px-4 py-3 text-white/60">{"★".repeat(t.rating)}</td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link href={`/admin/testimonials/${t.id}/edit`} className="text-[#C79B42] hover:underline">
                    Edit
                  </Link>
                  <DeleteButton id={t.id} action={deleteTestimonial} label="testimonial" />
                </td>
              </tr>
            ))}
            {(!items || items.length === 0) && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-white/40">
                  No testimonials yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
