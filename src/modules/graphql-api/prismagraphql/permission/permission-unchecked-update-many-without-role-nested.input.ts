import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRoleInput } from './permission-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRoleInput } from './permission-create-or-connect-without-role.input';
import { PermissionUpsertWithWhereUniqueWithoutRoleInput } from './permission-upsert-with-where-unique-without-role.input';
import { PermissionCreateManyRoleInputEnvelope } from './permission-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithWhereUniqueWithoutRoleInput } from './permission-update-with-where-unique-without-role.input';
import { PermissionUpdateManyWithWhereWithoutRoleInput } from './permission-update-many-with-where-without-role.input';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';

@InputType()
export class PermissionUncheckedUpdateManyWithoutRoleNestedInput {

    @Field(() => [PermissionCreateWithoutRoleInput], {nullable:true})
    @Type(() => PermissionCreateWithoutRoleInput)
    create?: Array<PermissionCreateWithoutRoleInput>;

    @Field(() => [PermissionCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutRoleInput>;

    @Field(() => [PermissionUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => PermissionUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<PermissionUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => PermissionCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => PermissionCreateManyRoleInputEnvelope)
    createMany?: PermissionCreateManyRoleInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>>;

    @Field(() => [PermissionUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => PermissionUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<PermissionUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [PermissionUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => PermissionUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<PermissionUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    @Type(() => PermissionScalarWhereInput)
    deleteMany?: Array<PermissionScalarWhereInput>;
}
