import { ApiProperty } from '@nestjs/swagger';

export class CreditNoteDto {
  @ApiProperty()
  readonly creditNoteNumber: string;

  @ApiProperty()
  readonly remarks: string;

  @ApiProperty()
  readonly dateCreated: Date;

  @ApiProperty()
  readonly dateUpdated: Date;
}
