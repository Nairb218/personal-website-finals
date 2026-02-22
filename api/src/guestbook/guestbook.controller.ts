import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';

@Controller('guestbook')
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createGuestbookDto: CreateGuestbookDto) {
    const entry = await this.guestbookService.createEntry(createGuestbookDto);
    return {
      success: true,
      message: 'Guestbook entry created successfully',
      data: entry,
    };
  }

  @Get()
  async findAll() {
    const entries = await this.guestbookService.getPublicEntries();
    return {
      success: true,
      data: entries,
    };
  }
}
