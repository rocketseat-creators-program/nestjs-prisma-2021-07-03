import { Post } from '../entities/post.entity';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreatePostDto extends Post {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsEmail()
  authorEmail: string;
}
