import { PrismaService } from 'src/prisma.service';
import { CreateUsersDto } from './users.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string | null;
        phone: string;
        role: import(".prisma/client").$Enums.Role;
        isClubMember: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(dto: CreateUsersDto): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string | null;
        phone: string;
        role: import(".prisma/client").$Enums.Role;
        isClubMember: boolean;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
