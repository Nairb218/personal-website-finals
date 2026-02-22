import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';

@Injectable()
export class GuestbookService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async createEntry(dto: CreateGuestbookDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('guestbook')
      .insert({
        name: dto.name,
        message: dto.message,
        visibility: dto.visibility,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      throw new InternalServerErrorException('Failed to create guestbook entry');
    }

    return data;
  }

  async getPublicEntries() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('guestbook')
      .select('*')
      .eq('visibility', 'public')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase fetch error:', error);
      throw new InternalServerErrorException('Failed to fetch guestbook entries');
    }

    return data;
  }
}
