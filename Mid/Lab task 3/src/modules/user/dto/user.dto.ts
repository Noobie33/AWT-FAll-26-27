import { Transform } from "class-transformer";
import { IsEmail, IsIn, IsInt, IsString, Matches, Max, Min, MinLength, ValidateIf } from "class-validator";

export class CreateUserDto {
  @Transform(({ value }) => typeof value === "string" ? value.trim() : value)
  @IsString()
  @MinLength(3)
  fullName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])/, {
    message: "Password must include uppercase, lowercase, a digit and a special character",
  })
  password!: string;

  @IsInt()
  @Min(18)
  @Max(60)
  age!: number;

  @IsString()
  @Matches(/^01\d{9}$/, { message: "Phone must contain exactly 11 digits starting with 01" })
  phone!: string;

  @IsIn(["student", "teacher"])
  accountType!: "student" | "teacher";

  @ValidateIf((_user, value) => value !== undefined)
  @IsString()
  @MinLength(10)
  address?: string;
}
