import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private client: SupabaseClient;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.warn(
        'SUPABASE_URL or SUPABASE_ANON_KEY not set. Supabase client will not be initialized.',
      );
    }

    this.client = createClient(supabaseUrl || '', supabaseKey || '');
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
