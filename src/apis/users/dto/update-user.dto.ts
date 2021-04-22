import { IsNotEmpty, IsString, MaxLength } from "class-validator";


export class UpdateUserDto {
    @IsNotEmpty()
    @MaxLength(20)
    first_name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    last_name: string;
}