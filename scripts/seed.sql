-- Seed script for Hentetjeneste (run this in Supabase SQL editor or via CLI)
-- Replace <PARENT_UUID> and <STAFF_UUID> with real auth.user ids if you created accounts

-- Example profiles
INSERT INTO profiles (id, email, full_name, phone, role, avatar_url) VALUES
  ('<PARENT_UUID>', 'parent@example.com', 'Kari Hansson', '+47 400 11 222', 'parent', NULL),
  ('<STAFF_UUID>', 'staff@example.com', 'Ola Pedersen', '+47 900 22 333', 'staff', NULL);

-- Example children
INSERT INTO children (parent_id, name, date_of_birth, status, group) VALUES
  ('<PARENT_UUID>', 'Ola', '2021-04-01', 'absent', 'Solstrålen'),
  ('<PARENT_UUID>', 'Nora', '2019-08-02', 'absent', 'Måneklubben');

-- Example approved persons
INSERT INTO approved_persons (child_id, full_name, relationship, phone, can_pick_up, status) VALUES
  ( (SELECT id FROM children WHERE name='Ola' LIMIT 1), 'Petter Hansen', 'Onkel', '+47 412 34 567', true, 'approved'),
  ( (SELECT id FROM children WHERE name='Nora' LIMIT 1), 'Ingrid Olsen', 'Bestemor', '+47 412 98 765', true, 'approved');

-- Example daily_info
INSERT INTO daily_info (date, type, title, description, created_by) VALUES
  (CURRENT_DATE, 'menu', 'Dagens lunsj', 'Fiskepudding og potetmos', '<STAFF_UUID>');

-- Example incidents
INSERT INTO incidents (child_id, type, description, severity, reported_by, notified_parents) VALUES
  ( (SELECT id FROM children WHERE name='Ola' LIMIT 1), 'injury', 'Skrubbsår på kneet', 'low', '<STAFF_UUID>', true );

-- Example attendance logs (manual check-in/out follow these patterns)
INSERT INTO attendance_logs (child_id, action, timestamp, verified_by) VALUES
  ( (SELECT id FROM children WHERE name='Ola' LIMIT 1), 'check_in', NOW(), '<STAFF_UUID>' ),
  ( (SELECT id FROM children WHERE name='Ola' LIMIT 1), 'check_out', NOW(), '<STAFF_UUID>' );

-- Notes:
-- If the FK constraint to profiles.id should match auth.users.id, ensure the profile IDs match the auth users that exist in Supabase Auth.
-- Use the Supabase dashboard to create Auth users and copy their UUIDs to the INSERT statements here.
