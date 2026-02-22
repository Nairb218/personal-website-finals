import { IsString, IsNotEmpty, IsEnum, MinLength, MaxLength } from 'class-validator';

export enum Visibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export class CreateGuestbookDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(50, { message: 'Name must not exceed 50 characters' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Message is required' })
  @MinLength(3, { message: 'Message must be at least 3 characters' })
  @MaxLength(500, { message: 'Message must not exceed 500 characters' })
  message: string;

  @IsEnum(Visibility, { message: 'Visibility must be public or private' })
  visibility: Visibility;
}
