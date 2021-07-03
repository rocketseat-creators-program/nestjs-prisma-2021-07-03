import { User } from '../entities/user.entity';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  name: string;
}
