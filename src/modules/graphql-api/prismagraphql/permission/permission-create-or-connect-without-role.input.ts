import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutRoleInput } from './permission-create-without-role.input';

@InputType()
export class PermissionCreateOrConnectWithoutRoleInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>;

    @Field(() => PermissionCreateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRoleInput)
    create!: PermissionCreateWithoutRoleInput;
}
