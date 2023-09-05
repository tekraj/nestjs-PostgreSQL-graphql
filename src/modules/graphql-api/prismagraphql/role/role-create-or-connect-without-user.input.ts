import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';

@InputType()
export class RoleCreateOrConnectWithoutUserInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RoleCreateWithoutUserInput, {nullable:false})
    @Type(() => RoleCreateWithoutUserInput)
    create!: RoleCreateWithoutUserInput;
}
