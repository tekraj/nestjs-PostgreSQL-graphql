import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateInput } from './permission-create.input';
import { PermissionUpdateInput } from './permission-update.input';

@ArgsType()
export class UpsertOnePermissionArgs {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>;

    @Field(() => PermissionCreateInput, {nullable:false})
    @Type(() => PermissionCreateInput)
    create!: PermissionCreateInput;

    @Field(() => PermissionUpdateInput, {nullable:false})
    @Type(() => PermissionUpdateInput)
    update!: PermissionUpdateInput;
}
