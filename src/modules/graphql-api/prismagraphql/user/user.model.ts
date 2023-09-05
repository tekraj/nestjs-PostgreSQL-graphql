import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleTypes } from '../prisma/role-types.enum';
import { Role } from '../role/role.model';
import { Comment } from '../comment/comment.model';
import { Like } from '../like/like.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Int, {nullable:false})
    userRoleId!: number;

    @Field(() => String, {nullable:false,defaultValue:'Active'})
    userStatus!: string;

    @Field(() => RoleTypes, {nullable:true})
    roleType!: keyof typeof RoleTypes | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
