import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from '../prisma/role-types.enum';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutPermissionsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RoleTypes, {nullable:false})
    roleType!: keyof typeof RoleTypes;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    User?: UserCreateNestedManyWithoutRoleInput;
}
