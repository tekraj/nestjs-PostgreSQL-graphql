import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutPermissionsInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutPermissionsInput)
    data!: RoleUpdateWithoutPermissionsInput;
}
