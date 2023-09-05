import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUserInput } from './role-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutUserInput {

    @Field(() => RoleCreateWithoutUserInput, {nullable:true})
    @Type(() => RoleCreateWithoutUserInput)
    create?: RoleCreateWithoutUserInput;

    @Field(() => RoleCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUserInput)
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
}
