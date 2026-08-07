import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { TestimonialForm } from "@/components/admin/testimonial-form";
import { updateTestimonial } from "../../actions";

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: item } = await supabase.from("testimonials").select("*").eq("id", id).single();
  if (!item) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Edit Testimonial</h1>
      <div className="mt-6">
        <TestimonialForm initial={item} onSubmit={updateTestimonial.bind(null, id)} />
      </div>
    </div>
  );
}
