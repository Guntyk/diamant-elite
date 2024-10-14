import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeesDto {
  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  job: string;

  @IsString()
  workplace: string;

  @IsNotEmpty()
  @IsString()
  biography: string;
}

export class UpdateEmployeesDto extends PartialType(CreateEmployeesDto) {}
