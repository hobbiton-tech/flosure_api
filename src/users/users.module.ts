import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersEntity } from 'src/setups/entities/users.entity';
import { UsersEntityRepository } from 'src/setups/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, UsersEntityRepository])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
