-- GLS Finvest — Storage bucket for admin-uploaded photos
-- Run this in Supabase Dashboard → SQL Editor, AFTER schema.sql

insert into storage.buckets (id, name, public)
values ('photos', 'photos', true)
on conflict (id) do nothing;

create policy "Public read access for photos"
on storage.objects for select
using (bucket_id = 'photos');

create policy "Authenticated users can upload photos"
on storage.objects for insert
with check (bucket_id = 'photos' and auth.role() = 'authenticated');

create policy "Authenticated users can update photos"
on storage.objects for update
using (bucket_id = 'photos' and auth.role() = 'authenticated');

create policy "Authenticated users can delete photos"
on storage.objects for delete
using (bucket_id = 'photos' and auth.role() = 'authenticated');
