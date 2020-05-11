import { ApiProperty } from '@nestjs/swagger';

export class UsersDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  department: string;

  @ApiProperty()
  branch: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  jobTitle: string;
}
