import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutUserInput } from './role-update-without-user.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutUserInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutUserInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUserInput)
    data!: RoleUpdateWithoutUserInput;
}
