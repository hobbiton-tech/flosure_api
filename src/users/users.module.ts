import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UsersEntityRepository } from './repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, UsersEntityRepository])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
