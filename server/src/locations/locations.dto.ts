import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateLocationsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsUrl()
  map: string;
}

export class UpdateLocationsDto extends PartialType(CreateLocationsDto) {}
