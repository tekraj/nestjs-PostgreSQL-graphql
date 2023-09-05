import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumOperationNullableListFilter } from '../prisma/enum-operation-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class PermissionWhereInput {

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    modelName?: StringFilter;

    @Field(() => EnumOperationNullableListFilter, {nullable:true})
    allowedOperations?: EnumOperationNullableListFilter;

    @Field(() => IntFilter, {nullable:true})
    rolePermissionsId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;
}
