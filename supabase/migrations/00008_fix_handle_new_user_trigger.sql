-- Fix handle_new_user() trigger to include NOT NULL columns

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    username,
    legal_name,
    display_name,
    mentor_name,
    campus_id,
    so_id
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data ->> 'legal_name', NEW.raw_user_meta_data ->> 'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data ->> 'display_name', NEW.raw_user_meta_data ->> 'legal_name', NEW.raw_user_meta_data ->> 'username', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data ->> 'mentor_name', ''),
    (NEW.raw_user_meta_data ->> 'campus_id')::uuid,
    NEW.raw_user_meta_data ->> 'so_id'
  );
  RETURN NEW;
END;
$$;
