import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/setups/entities/users.entity';
import { UsersDto } from 'src/setups/dtos/users.dto';
import { UsersEntityRepository } from 'src/setups/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersEntityRepository: UsersEntityRepository,
  ) {}

  async findAllUsers(): Promise<UsersEntity[]> {
    return this.usersEntityRepository.find({});
  }

  async createUsers(usersDto: UsersDto): Promise<UsersDto & UsersEntity> {
    return this.usersEntityRepository.save(usersDto);
  }

  async findOneUser(id: string): Promise<UsersEntity> {
    return this.usersEntityRepository.findOneOrFail(id);
  }

  async updateUser(
    id: string,
    usersDto: UsersDto,
  ): Promise<UsersDto & UsersEntity> {
    return this.usersEntityRepository.save({
      ...usersDto,
      id: id,
    });
  }
}
