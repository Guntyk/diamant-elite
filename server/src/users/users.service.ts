import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUsersDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
    //     name: 'Leanne Graham',
    //     email: 'Sincere@april.biz',
    //     role: 'admin',
    //   },
    //   {
    //     name: 'Ervin Howell',
    //     email: 'Shanna@melissa.tv',
    //     role: 'dancer',
    //   },
    //   {
    //     name: 'Clementine Bauch',
    //     email: 'Nathan@yesenia.net',
    //     role: 'admin',
    //   },
    //   {
    //     name: 'Patricia Lebsack',
    //     email: 'Julianne.OConner@kory.org',
    //     role: 'dancer',
    //   },
    //   {
    //     name: 'Chelsey Dietrich',
    //     email: 'Lucio_Hettinger@annie.ca',
    //     role: 'coach',
    //   },
    //   {
    //     name: 'Mrs. Dennis Schulist',
    //     email: 'Karley_Dach@jasper.info',
    //     role: 'coach',
    //   },
    //   {
    //     name: 'Kurtis Weissnat',
    //     email: 'Telly.Hoeger@billy.biz',
    //     role: 'dancer',
    //   },
    //   {
    //     name: 'Nicholas Runolfsdottir V',
    //     email: 'Sherwood@rosamond.me',
    //     role: 'coach',
    //   },
    //   {
    //     name: 'Glenna Reichert',
    //     email: 'Chaim_McDermott@dana.io',
    //     role: 'dancer',
    //   },
    //   {
    //     name: 'Clementina DuBuque',
    //     email: 'Rey.Padberg@karina.biz',
    //     role: 'dancer',
    //   },
    // ];
  }

  create(dto: CreateUsersDto) {
    return this.prisma.user.create({
      data: dto,
    });
  }
}
