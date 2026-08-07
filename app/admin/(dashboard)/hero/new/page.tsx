"use client";

import { HeroImageForm } from "@/components/admin/hero-image-form";
import { createHeroImage } from "../actions";

export default function NewHeroImagePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add Hero Photo</h1>
      <div className="mt-6">
        <HeroImageForm onSubmit={(input) => createHeroImage(input)} />
      </div>
    </div>
  );
}
