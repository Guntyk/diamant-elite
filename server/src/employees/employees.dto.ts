import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

  @IsOptional()
  @IsString()
  workplace: string;

  @IsNotEmpty()
  @IsString()
  biography: string;
}

export class UpdateEmployeesDto extends PartialType(CreateEmployeesDto) {}
