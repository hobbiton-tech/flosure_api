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
import { PolicyService } from './services/policy/policy.service';
import { PolicyDto } from './dtos/policy.dto';


@Controller('policy')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Get()
  getAllPolicies() {
    return this.policyService.findAll();
  }

  @Post()
  createPolicy(@Body() policyDto: PolicyDto) {
    return this.policyService.createPolicy(policyDto);
  }

  @Get(':id')
  getOnePolicy(@Param('id') id: string) {
    return this.policyService.findOnePolicy(id);
  }

  @Put(':id')
  updatePolicy(@Param('id') id: string, @Body() policyDto: PolicyDto) {
    return this.policyService.updatePolicy(id, policyDto);
  }

  //backups
  @Get('/back-up')
  getAllBackUpPolicies() {
    return this.policyService.findAllPolicyBackUps();
  }

  @Post('/back-up')
  createBackUpPolicy(@Body() policyDto: PolicyDto) {
    return this.policyService.createPolicyBackUp(policyDto);
  }

  @Get('/back-up/:id')
  getOneBackUpPolicy(@Param('id') id: string) {
    return this.policyService.findOnePolicyBackUp(id);
  }

  @Put('/back-up/:id')
  updateBackUpPolicy(@Param('id') id: string, @Body() policyDto: PolicyDto) {
    return this.policyService.updatePolicyBackup(id, policyDto);
  }
}
