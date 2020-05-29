import { ApiProperty } from '@nestjs/swagger';

export class CoverNoteDto {
  @ApiProperty()
  readonly certificateNumber: string;

  @ApiProperty()
  readonly dateCreated: Date;

  @ApiProperty()
  readonly dateUpdated: Date;
}
