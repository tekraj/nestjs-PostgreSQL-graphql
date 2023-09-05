import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';

@InputType()
export class PermissionListRelationFilter {

    @Field(() => PermissionWhereInput, {nullable:true})
    every?: PermissionWhereInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    some?: PermissionWhereInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    none?: PermissionWhereInput;
}
