-- Add Dars System field to profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS dars_system TEXT DEFAULT '';

-- Update handle_new_user trigger to include dars_system
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, legal_name, father_name, phone, academic_tier, course_name, dars_system)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'legal_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'father_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    COALESCE(NEW.raw_user_meta_data->>'academic_tier', ''),
    COALESCE(NEW.raw_user_meta_data->>'course_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'dars_system', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
