import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUserInput } from './role-create-without-user.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutUserInput } from './role-create-or-connect-without-user.input';
import { RoleUpsertWithoutUserInput } from './role-upsert-without-user.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateToOneWithWhereWithoutUserInput } from './role-update-to-one-with-where-without-user.input';

@InputType()
export class RoleUpdateOneRequiredWithoutUserNestedInput {

    @Field(() => RoleCreateWithoutUserInput, {nullable:true})
    @Type(() => RoleCreateWithoutUserInput)
    create?: RoleCreateWithoutUserInput;

    @Field(() => RoleCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutUserInput)
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput;

    @Field(() => RoleUpsertWithoutUserInput, {nullable:true})
    @Type(() => RoleUpsertWithoutUserInput)
    upsert?: RoleUpsertWithoutUserInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RoleUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => RoleUpdateToOneWithWhereWithoutUserInput)
    update?: RoleUpdateToOneWithWhereWithoutUserInput;
}
