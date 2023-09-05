import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleTypes } from '../prisma/role-types.enum';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../user/user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutPermissionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RoleTypes, {nullable:false})
    roleType!: keyof typeof RoleTypes;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutRoleInput;
}
