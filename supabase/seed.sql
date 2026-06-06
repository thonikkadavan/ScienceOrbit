-- Seed campuses
INSERT INTO campuses (name) VALUES
  ('Main Campus'),
  ('North Campus'),
  ('South Campus'),
  ('East Campus'),
  ('West Campus'),
  ('Online Campus')
ON CONFLICT (name) DO NOTHING;

-- Seed subjects
INSERT INTO subjects (name) VALUES
  ('Mathematics'),
  ('Physics'),
  ('Chemistry'),
  ('Biology'),
  ('Computer Science'),
  ('English Literature'),
  ('History'),
  ('Geography'),
  ('Economics'),
  ('Art & Design'),
  ('Music'),
  ('Physical Education')
ON CONFLICT (name) DO NOTHING;
