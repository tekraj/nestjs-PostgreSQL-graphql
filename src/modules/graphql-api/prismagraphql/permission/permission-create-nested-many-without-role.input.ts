import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRoleInput } from './permission-create-without-role.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRoleInput } from './permission-create-or-connect-without-role.input';
import { PermissionCreateManyRoleInputEnvelope } from './permission-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateNestedManyWithoutRoleInput {

    @Field(() => [PermissionCreateWithoutRoleInput], {nullable:true})
    @Type(() => PermissionCreateWithoutRoleInput)
    create?: Array<PermissionCreateWithoutRoleInput>;

    @Field(() => [PermissionCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutRoleInput>;

    @Field(() => PermissionCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => PermissionCreateManyRoleInputEnvelope)
    createMany?: PermissionCreateManyRoleInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>>;
}
