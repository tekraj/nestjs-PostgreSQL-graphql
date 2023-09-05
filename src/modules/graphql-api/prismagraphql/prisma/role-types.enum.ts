import { registerEnumType } from '@nestjs/graphql';

export enum RoleTypes {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    AUTHOR = "AUTHOR",
    READER = "READER"
}


registerEnumType(RoleTypes, { name: 'RoleTypes', description: undefined })
