import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassDto } from '../../dtos/class.dto';
import { Class } from '../../entities/class.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
  ) {}

  findAll = async () => {
    return this.classRepository.find();
  };

  createClass = async (classDto: ClassDto) => {
    return this.classRepository.save(classDto);
  };

  findOneClass = async (id: string) => {
    return this.classRepository.findOneOrFail(id);
  };

  updateClass = async (id: string, classDto: ClassDto) => {
    return this.classRepository.save({ ...classDto, id: id });
  };

  removeClass = async (id: string) => {
    await this.classRepository.findOneOrFail(id);
    return this.classRepository.delete(id);
  };
}
