import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateEmployeesDto, UpdateEmployeesDto } from './employees.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateEmployeesDto) {
    return this.prisma.employee.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.employee.findMany();
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateEmployeesDto) {
    return this.prisma.employee.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.employee.delete({
      where: {
        id,
      },
    });
  }
}
