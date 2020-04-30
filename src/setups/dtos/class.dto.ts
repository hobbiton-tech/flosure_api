import { ApiProperty } from '@nestjs/swagger';

export class ClassDto {
  @ApiProperty()
  readonly className: string;

  @ApiProperty()
  readonly classCode: number;

  @ApiProperty()
  readonly classDescription: string;

  @ApiProperty()
  readonly classPolicyNumberPrefix: string;

  @ApiProperty()
  readonly classClaimNumberPrefix: string;
}
