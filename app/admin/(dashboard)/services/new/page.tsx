"use client";

import { ServiceForm } from "@/components/admin/service-form";
import { createService } from "../actions";

export default function NewServicePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add Service</h1>
      <div className="mt-6">
        <ServiceForm onSubmit={(input) => createService(input)} />
      </div>
    </div>
  );
}
