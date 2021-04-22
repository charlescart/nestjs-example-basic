import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  // @IsNotEmpty()
  // @IsEmail()
  // email: string;

  @IsNotEmpty()
  @MaxLength(20)
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(250)
  password: string;
}
