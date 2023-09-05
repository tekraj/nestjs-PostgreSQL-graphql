import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from './role-types.enum';
import { NestedEnumRoleTypesNullableWithAggregatesFilter } from './nested-enum-role-types-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumRoleTypesNullableFilter } from './nested-enum-role-types-nullable-filter.input';

@InputType()
export class EnumRoleTypesNullableWithAggregatesFilter {

    @Field(() => RoleTypes, {nullable:true})
    equals?: keyof typeof RoleTypes;

    @Field(() => [RoleTypes], {nullable:true})
    in?: Array<keyof typeof RoleTypes>;

    @Field(() => [RoleTypes], {nullable:true})
    notIn?: Array<keyof typeof RoleTypes>;

    @Field(() => NestedEnumRoleTypesNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRoleTypesNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumRoleTypesNullableFilter, {nullable:true})
    _min?: NestedEnumRoleTypesNullableFilter;

    @Field(() => NestedEnumRoleTypesNullableFilter, {nullable:true})
    _max?: NestedEnumRoleTypesNullableFilter;
}
