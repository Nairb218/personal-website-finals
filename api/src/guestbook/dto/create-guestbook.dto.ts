import { IsString, IsNotEmpty, IsEnum, MinLength, MaxLength } from 'class-validator';

export enum Visibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export class CreateGuestbookDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(1, { message: 'Name must be at least 1 characters' })
  @MaxLength(50, { message: 'Name must not exceed 20 characters' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Message is required' })
  @MinLength(5, { message: 'Message must be at least 5 characters' })
  @MaxLength(300, { message: 'Message must not exceed 300 characters' })
  message: string;

  @IsEnum(Visibility, { message: 'Visibility must be public or private' })
  visibility: Visibility;
}
