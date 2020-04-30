import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ClassDto } from '../../dtos/class.dto';
import { ClassService } from '../../services/class/class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get()
  getAllClasses() {
    return this.classService.findAll();
  }

  @Post()
  createClass(@Body() classDto: ClassDto) {
    return this.classService.createClass(classDto);
  }

  @Get(':id')
  getOneClass(@Param('id') id: string) {
    return this.classService.findOneClass(id);
  }

  @Put(':id')
  updateClass(@Param('id') id: string, @Body() classDto: ClassDto) {
    return this.classService.updateClass(id, classDto);
  }

  @Delete(':id')
  deleteClass(@Param('id') id: string) {
    return this.classService.removeClass(id);
  }
}
