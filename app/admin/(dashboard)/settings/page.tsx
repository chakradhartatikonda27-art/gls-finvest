import { createClient } from "@/lib/supabase/server";
import { SettingsForm } from "@/components/admin/settings-form";

export default async function AdminSettingsPage() {
  const supabase = await createClient();
  const { data: settings } = await supabase.from("site_settings").select("*").eq("id", 1).single();

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Site Settings</h1>
      <p className="mt-1 text-sm text-white/60">
        Contact details, taglines, and social links used across the whole site.
      </p>
      <div className="mt-6">
        <SettingsForm initial={settings ?? undefined} />
      </div>
    </div>
  );
}
