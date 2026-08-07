"use client";

import { GalleryForm } from "@/components/admin/gallery-form";
import { createGalleryItem } from "../actions";

export default function NewGalleryItemPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add Gallery Item</h1>
      <div className="mt-6">
        <GalleryForm onSubmit={(input) => createGalleryItem(input)} />
      </div>
    </div>
  );
}
