import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qybyrwvjhnvdsgctbwcl.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5Ynlyd3ZqaG52ZHNnY3Rid2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MjY5MDksImV4cCI6MjA4NzMwMjkwOX0.nx4VcdmZ7y1O5PN7UuPXXVFPwWIL2eJwYPcygulVp8I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
