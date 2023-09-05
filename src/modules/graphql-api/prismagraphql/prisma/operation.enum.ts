import { registerEnumType } from '@nestjs/graphql';

export enum Operation {
    list = "list",
    get = "get",
    create = "create",
    update = "update",
    'delete' = "delete",
    search = "search",
    onCreate = "onCreate",
    onUpdate = "onUpdate",
    onDelete = "onDelete"
}


registerEnumType(Operation, { name: 'Operation', description: undefined })
