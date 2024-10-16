import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateLocationsDto, UpdateLocationsDto } from './locations.dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateLocationsDto) {
    return this.prisma.location.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.location.findMany();
  }

  findOne(id: number) {
    return this.prisma.location.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateLocationsDto) {
    return this.prisma.location.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.location.delete({
      where: {
        id,
      },
    });
  }
}
