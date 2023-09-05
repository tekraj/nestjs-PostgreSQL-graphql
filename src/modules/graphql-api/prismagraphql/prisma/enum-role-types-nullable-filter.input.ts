import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from './role-types.enum';
import { NestedEnumRoleTypesNullableFilter } from './nested-enum-role-types-nullable-filter.input';

@InputType()
export class EnumRoleTypesNullableFilter {

    @Field(() => RoleTypes, {nullable:true})
    equals?: keyof typeof RoleTypes;

    @Field(() => [RoleTypes], {nullable:true})
    in?: Array<keyof typeof RoleTypes>;

    @Field(() => [RoleTypes], {nullable:true})
    notIn?: Array<keyof typeof RoleTypes>;

    @Field(() => NestedEnumRoleTypesNullableFilter, {nullable:true})
    not?: NestedEnumRoleTypesNullableFilter;
}
