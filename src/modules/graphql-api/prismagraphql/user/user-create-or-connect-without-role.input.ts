import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRoleInput } from './user-create-without-role.input';

@InputType()
export class UserCreateOrConnectWithoutRoleInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutRoleInput, {nullable:false})
    @Type(() => UserCreateWithoutRoleInput)
    create!: UserCreateWithoutRoleInput;
}
