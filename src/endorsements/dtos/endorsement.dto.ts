import { ApiProperty } from '@nestjs/swagger';
import {
  EndorsementType,
  EndorsementStatus,
} from '../entities/endorsement.entity';

export class EndorsementDto {
  @ApiProperty()
  readonly type: EndorsementType;

  @ApiProperty()
  readonly remark: string;

  @ApiProperty()
  readonly dateCreated: Date;

  @ApiProperty()
  readonly dateUpdated: Date;

  @ApiProperty()
  readonly status: EndorsementStatus;

  @ApiProperty()
  effectDate: Date;
}
