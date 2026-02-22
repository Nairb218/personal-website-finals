-- Supabase SQL: Create guestbook table
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New Query)

CREATE TABLE IF NOT EXISTS guestbook (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  message VARCHAR(500) NOT NULL,
  visibility VARCHAR(10) NOT NULL DEFAULT 'public' CHECK (visibility IN ('public', 'private')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert
CREATE POLICY "Allow public inserts" ON guestbook
  FOR INSERT
  WITH CHECK (true);

-- Allow reading only public entries
CREATE POLICY "Allow reading public entries" ON guestbook
  FOR SELECT
  USING (visibility = 'public');

-- Create index for faster queries
CREATE INDEX idx_guestbook_visibility ON guestbook (visibility);
CREATE INDEX idx_guestbook_created_at ON guestbook (created_at DESC);
