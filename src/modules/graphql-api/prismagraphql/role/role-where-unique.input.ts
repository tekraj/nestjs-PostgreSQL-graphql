import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { EnumRoleTypesFilter } from '../prisma/enum-role-types-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PermissionListRelationFilter } from '../permission/permission-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class RoleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => EnumRoleTypesFilter, {nullable:true})
    roleType?: EnumRoleTypesFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permissions?: PermissionListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User?: UserListRelationFilter;
}
