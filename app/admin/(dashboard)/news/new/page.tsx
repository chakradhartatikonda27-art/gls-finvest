"use client";

import { NewsForm } from "@/components/admin/news-form";
import { createNewsItem } from "../actions";

export default function NewNewsItemPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add News Item</h1>
      <div className="mt-6">
        <NewsForm onSubmit={(input) => createNewsItem(input)} />
      </div>
    </div>
  );
}
