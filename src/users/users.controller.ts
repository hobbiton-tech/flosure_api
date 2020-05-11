import { Controller, Post, Body, Param, Put, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/users.entity';
import { UsersDto } from './dtos/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findOneUser(@Param('id') id: string): Promise<UsersEntity> {
    return this.usersService.findOneUser(id);
  }

  @Get()
  async getAllUsers(): Promise<UsersEntity[]> {
    return this.usersService.findAllUsers();
  }

  @Post()
  async createUser(
    @Body() usersDto: UsersDto,
  ): Promise<UsersEntity & UsersEntity> {
    return this.usersService.createUsers(usersDto);
  }

  @Put(':id')
  async updateAgent(
    @Param('id') id: string,
    @Body() usersDto: UsersDto,
  ): Promise<UsersDto & UsersEntity> {
    return this.usersService.updateUser(id, usersDto);
  }
}
