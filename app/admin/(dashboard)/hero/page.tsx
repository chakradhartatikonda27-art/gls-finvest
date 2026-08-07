import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteHeroImage } from "./actions";

export default async function AdminHeroPage() {
  const supabase = await createClient();
  const { data: images } = await supabase
    .from("hero_images")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Homepage Hero Rotation</h1>
          <p className="mt-1 text-sm text-white/60">{images?.length ?? 0} photos — shown first is added first</p>
        </div>
        <Link
          href="/admin/hero/new"
          className="rounded-lg bg-[#C79B42] hover:bg-[#D9AE52] text-[#173E82] font-semibold px-4 py-2 text-sm transition-colors"
        >
          + Add Photo
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {(images ?? []).map((img) => (
          <div key={img.id} className="rounded-xl overflow-hidden border border-white/10">
            <div className="relative aspect-[4/3]">
              <Image src={img.photo_url} alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="flex items-center justify-between p-3 bg-[#1A2435]">
              <Link href={`/admin/hero/${img.id}/edit`} className="text-[#C79B42] hover:underline text-sm">
                Edit
              </Link>
              <DeleteButton id={img.id} action={deleteHeroImage} label="hero photo" />
            </div>
          </div>
        ))}
        {(!images || images.length === 0) && (
          <p className="col-span-full text-center text-white/40 py-8">No hero photos yet — add at least one.</p>
        )}
      </div>
    </div>
  );
}
