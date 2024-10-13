import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUsersDto {
  @IsString({
    message: "Ім'я не строка!",
  })
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;

  @IsNotEmpty()
  @IsBoolean()
  isClubMember: boolean;
}

export type TUpdateUsersDto = Partial<CreateUsersDto>;
