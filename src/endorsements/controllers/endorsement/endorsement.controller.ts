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

import { EndorsementDto } from '../../dtos/endorsement.dto';
import { EndorsementService } from '../../services/endorsement/endorsement.service';

@Controller('endorsement')
export class EndorsementController {
  constructor(private readonly endorsementService: EndorsementService) {}

  @Get()
  getAllEndorsements() {
    return this.endorsementService.findAll();
  }

  @Post(':id')
  createEndorsement(
    @Param('id') id: string,
    @Body() endorsementDto: EndorsementDto,
  ) {
    return this.endorsementService.createEndorsement(id, endorsementDto);
  }

  @Get(':id')
  getOneEndorsement(@Param('id') id: string) {
    return this.endorsementService.findOneEndorsement(id);
  }

  @Put(':id')
  updateEndorsement(
    @Param('id') id: string,
    @Body() endorsementDto: EndorsementDto,
  ) {
    return this.updateEndorsement(id, endorsementDto);
  }
}
