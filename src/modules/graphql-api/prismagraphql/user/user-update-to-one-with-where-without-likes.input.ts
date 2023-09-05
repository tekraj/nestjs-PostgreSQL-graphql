import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLikesInput } from './user-update-without-likes.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutLikesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutLikesInput, {nullable:false})
    @Type(() => UserUpdateWithoutLikesInput)
    data!: UserUpdateWithoutLikesInput;
}
