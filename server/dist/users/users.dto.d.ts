import { Role } from '@prisma/client';
export declare class CreateUsersDto {
    name: string;
    email: string;
    phone: string;
    role: Role;
    isClubMember: boolean;
}
export type TUpdateUsersDto = Partial<CreateUsersDto>;
