import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLikesInput } from './user-create-or-connect-without-likes.input';
import { UserUpsertWithoutLikesInput } from './user-upsert-without-likes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLikesInput } from './user-update-to-one-with-where-without-likes.input';

@InputType()
export class UserUpdateOneRequiredWithoutLikesNestedInput {

    @Field(() => UserCreateWithoutLikesInput, {nullable:true})
    @Type(() => UserCreateWithoutLikesInput)
    create?: UserCreateWithoutLikesInput;

    @Field(() => UserCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLikesInput)
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;

    @Field(() => UserUpsertWithoutLikesInput, {nullable:true})
    @Type(() => UserUpsertWithoutLikesInput)
    upsert?: UserUpsertWithoutLikesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutLikesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLikesInput)
    update?: UserUpdateToOneWithWhereWithoutLikesInput;
}
