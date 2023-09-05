import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleUpsertWithoutPermissionsInput {

    @Field(() => RoleUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutPermissionsInput)
    update!: RoleUpdateWithoutPermissionsInput;

    @Field(() => RoleCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => RoleCreateWithoutPermissionsInput)
    create!: RoleCreateWithoutPermissionsInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
