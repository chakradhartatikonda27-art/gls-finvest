"use client";

import { TestimonialForm } from "@/components/admin/testimonial-form";
import { createTestimonial } from "../actions";

export default function NewTestimonialPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add Testimonial</h1>
      <div className="mt-6">
        <TestimonialForm onSubmit={(input) => createTestimonial(input)} />
      </div>
    </div>
  );
}
