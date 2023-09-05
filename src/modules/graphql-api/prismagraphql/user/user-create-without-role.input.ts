import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleTypes } from '../prisma/role-types.enum';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';
import { LikeCreateNestedManyWithoutUserInput } from '../like/like-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutRoleInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    userStatus?: string;

    @Field(() => RoleTypes, {nullable:true})
    roleType?: keyof typeof RoleTypes;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;

    @Field(() => LikeCreateNestedManyWithoutUserInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutUserInput;
}
