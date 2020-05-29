import { ApiProperty } from '@nestjs/swagger';

export class DebitNoteDto {
  @ApiProperty()
  readonly debitNoteNumber: string;

  @ApiProperty()
  readonly remarks: string;

  @ApiProperty()
  readonly dateCreated: Date;

  @ApiProperty()
  readonly dateUpdated: Date;
}
