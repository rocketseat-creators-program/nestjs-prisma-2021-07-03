import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  async findOne(id: number): Promise<User | null> {
    return undefined;
  }

  async findAll(): Promise<User[]> {
    return undefined;
  }

  async create(dto: CreateUserDto): Promise<User> {
    return undefined;
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    return undefined;
  }

  async remove(id: number): Promise<User> {
    return undefined;
  }
}
