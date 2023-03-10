import { IsString, IsInt, Min, IsEmail, IsNotEmpty, Matches } from "class-validator";

export class CreateCrudPersonDto {
    @IsString()
     name: string;

    @IsInt()
    @Min(1)
     age: number;

    @IsString({each: true})
    @IsEmail()
     email: string;

    @IsNotEmpty()
    password: string

}
