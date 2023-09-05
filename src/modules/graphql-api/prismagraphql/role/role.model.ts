import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RoleTypes } from '../prisma/role-types.enum';
import { Permission } from '../permission/permission.model';
import { User } from '../user/user.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RoleTypes, {nullable:false})
    roleType!: keyof typeof RoleTypes;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Permission], {nullable:true})
    permissions?: Array<Permission>;

    @Field(() => [User], {nullable:true})
    User?: Array<User>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
