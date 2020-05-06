import { ApiProperty } from '@nestjs/swagger';
//..
export class CommissionSetupDto {
  @ApiProperty()
  readonly intermediaryName: string;

  @ApiProperty()
  readonly intermediiaryType: string;

  @ApiProperty()
  readonly productClass: string;

  @ApiProperty()
  readonly productName: string;

  @ApiProperty()
  readonly commission: number;
}
