import { Module } from '@nestjs/common';
import { GuestbookModule } from './guestbook/guestbook.module';
import { SupabaseModule } from './supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    GuestbookModule,
  ],
})
export class AppModule {}
