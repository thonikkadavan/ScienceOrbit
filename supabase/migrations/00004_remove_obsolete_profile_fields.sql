ALTER TABLE profiles
  DROP COLUMN IF EXISTS subjects,
  DROP COLUMN IF EXISTS tech_stack,
  DROP COLUMN IF EXISTS repo_url,
  DROP COLUMN IF EXISTS deploy_url,
  DROP COLUMN IF EXISTS project_title,
  DROP COLUMN IF EXISTS project_description,
  DROP COLUMN IF EXISTS project_progress,
  DROP COLUMN IF EXISTS github_handle,
  DROP COLUMN IF EXISTS linkedin_url;

DROP TABLE IF EXISTS subjects;
