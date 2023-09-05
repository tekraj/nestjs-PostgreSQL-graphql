import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from './role-types.enum';
import { NestedEnumRoleTypesFilter } from './nested-enum-role-types-filter.input';

@InputType()
export class EnumRoleTypesFilter {

    @Field(() => RoleTypes, {nullable:true})
    equals?: keyof typeof RoleTypes;

    @Field(() => [RoleTypes], {nullable:true})
    in?: Array<keyof typeof RoleTypes>;

    @Field(() => [RoleTypes], {nullable:true})
    notIn?: Array<keyof typeof RoleTypes>;

    @Field(() => NestedEnumRoleTypesFilter, {nullable:true})
    not?: NestedEnumRoleTypesFilter;
}
