import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    id = "id",
    modelName = "modelName",
    allowedOperations = "allowedOperations",
    rolePermissionsId = "rolePermissionsId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
