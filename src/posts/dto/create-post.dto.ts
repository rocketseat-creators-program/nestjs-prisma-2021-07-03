import { Post } from '../entities/post.entity';
import { IsEmail, IsString } from 'class-validator';

export class CreatePostDto extends Post {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsEmail()
  authorEmail: string;
}
