import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutRoleInput } from './permission-update-without-role.input';
import { PermissionCreateWithoutRoleInput } from './permission-create-without-role.input';

@InputType()
export class PermissionUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>;

    @Field(() => PermissionUpdateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRoleInput)
    update!: PermissionUpdateWithoutRoleInput;

    @Field(() => PermissionCreateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRoleInput)
    create!: PermissionCreateWithoutRoleInput;
}
