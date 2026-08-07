import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteService } from "./actions";

export default async function AdminServicesPage() {
  const supabase = await createClient();
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Services</h1>
          <p className="mt-1 text-sm text-white/60">{services?.length ?? 0} total</p>
        </div>
        <Link
          href="/admin/services/new"
          className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-4 py-2 text-sm transition-colors"
        >
          + Add Service
        </Link>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white/5 text-left text-white/60">
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(services ?? []).map((s) => (
              <tr key={s.id} className="border-t border-white/10 text-white/90">
                <td className="px-4 py-3">{s.title}</td>
                <td className="px-4 py-3 text-white/60">{s.slug}</td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link href={`/admin/services/${s.id}/edit`} className="text-[#C79B42] hover:underline">
                    Edit
                  </Link>
                  <DeleteButton id={s.id} action={deleteService} label="service" />
                </td>
              </tr>
            ))}
            {(!services || services.length === 0) && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-white/40">
                  No services yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
