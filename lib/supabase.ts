import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface ConecthaLead {
  id?: number;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  created_at?: string;
}

export interface ConecthaPartner {
  id?: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  segment?: string;
  message?: string;
  created_at?: string;
}
