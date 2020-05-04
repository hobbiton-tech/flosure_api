import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CommissionSetupDto } from '../../dtos/commission-setup.dto';
import { CommissionSetupsService } from '../../services/commission-setups/commission-setups.service';

@Controller('commission-setups')
export class CommissionSetupsController {
  constructor(
    private readonly commissionSetupServcie: CommissionSetupsService,
  ) {}

  @Get()
  getAllCommissionSetups() {
    return this.commissionSetupServcie.findAll();
  }

  @Post()
  createClass(@Body() commissionSetupDto: CommissionSetupDto) {
    return this.commissionSetupServcie.createCommissionSetup(
      commissionSetupDto,
    );
  }

  @Get(':id')
  getOneClass(@Param('id') id: string) {
    return this.commissionSetupServcie.findOneCommissionSetup(id);
  }

  @Put(':id')
  updateClass(
    @Param('id') id: string,
    @Body() commissionSetupDto: CommissionSetupDto,
  ) {
    return this.commissionSetupServcie.updateCommissionSetupRepository(
      id,
      commissionSetupDto,
    );
  }

  @Delete(':id')
  deleteClass(@Param('id') id: string) {
    return this.commissionSetupServcie.removeCommissionSetupRepository(id);
  }
}
