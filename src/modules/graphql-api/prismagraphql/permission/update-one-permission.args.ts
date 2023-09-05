import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionUpdateInput } from './permission-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@ArgsType()
export class UpdateOnePermissionArgs {

    @Field(() => PermissionUpdateInput, {nullable:false})
    @Type(() => PermissionUpdateInput)
    data!: PermissionUpdateInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>;
}
