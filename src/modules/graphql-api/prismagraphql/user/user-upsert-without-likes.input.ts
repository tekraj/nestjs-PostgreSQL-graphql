import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLikesInput } from './user-update-without-likes.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutLikesInput {

    @Field(() => UserUpdateWithoutLikesInput, {nullable:false})
    @Type(() => UserUpdateWithoutLikesInput)
    update!: UserUpdateWithoutLikesInput;

    @Field(() => UserCreateWithoutLikesInput, {nullable:false})
    @Type(() => UserCreateWithoutLikesInput)
    create!: UserCreateWithoutLikesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
