import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutRoleInput } from './permission-update-without-role.input';

@InputType()
export class PermissionUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>;

    @Field(() => PermissionUpdateWithoutRoleInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRoleInput)
    data!: PermissionUpdateWithoutRoleInput;
}
