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
import { RiskDto } from '../../dtos/risk.dto';
import { RiskService } from '../../services/risk/risk.service';

@Controller('risk')
export class RiskController {
  constructor(private readonly riskService: RiskService) {}

  @Get()
  getAllRisks() {
    return this.riskService.findAll();
  }

  @Post()
  createRisk(@Body() riskDto: RiskDto) {
    return this.riskService.createRisk(riskDto);
  }

  @Get(':id')
  getOneRisk(@Param('id') id: string) {
    return this.riskService.findOneRisk(id);
  }

  @Put(':id')
  updateRisk(@Param('id') id: string, @Body() riskDto: RiskDto) {
    return this.riskService.updateRisk(id, riskDto);
  }
}
