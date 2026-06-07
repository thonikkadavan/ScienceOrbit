-- Academic Tiering System
-- Add academic_tiers array to campuses (a campus can serve multiple tiers)
ALTER TABLE campuses ADD COLUMN IF NOT EXISTS academic_tiers TEXT[] DEFAULT '{}';

-- Add new columns to profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS academic_tier TEXT DEFAULT '';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS course_name TEXT DEFAULT '';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS job_title TEXT DEFAULT '';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS organisation TEXT DEFAULT '';

-- Seed Junior tier campuses
INSERT INTO campuses (name, academic_tiers) VALUES
  ('Baithul Izza', ARRAY['JUNIOR', 'FOUNDATION']),
  ('Hasaniyya', ARRAY['JUNIOR']),
  ('Hasanul Basari', ARRAY['JUNIOR']),
  ('Dunnurain', ARRAY['JUNIOR']),
  ('Al Munavvara', ARRAY['JUNIOR'])
ON CONFLICT (name) DO UPDATE SET academic_tiers = EXCLUDED.academic_tiers;

-- Seed Foundation tier campuses (Baithul Izza already inserted above)
INSERT INTO campuses (name, academic_tiers) VALUES
  ('Isra', ARRAY['FOUNDATION']),
  ('Qadariyya', ARRAY['FOUNDATION']),
  ('Tharbiyath', ARRAY['FOUNDATION']),
  ('Miraj', ARRAY['FOUNDATION'])
ON CONFLICT (name) DO UPDATE SET academic_tiers = EXCLUDED.academic_tiers;

-- Update handle_new_user trigger to include academic fields
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, legal_name, father_name, phone, academic_tier, course_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'legal_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'father_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    COALESCE(NEW.raw_user_meta_data->>'academic_tier', ''),
    COALESCE(NEW.raw_user_meta_data->>'course_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
