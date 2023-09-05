import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikesInput } from './user-create-without-likes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLikesInput } from './user-create-or-connect-without-likes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLikesInput {

    @Field(() => UserCreateWithoutLikesInput, {nullable:true})
    @Type(() => UserCreateWithoutLikesInput)
    create?: UserCreateWithoutLikesInput;

    @Field(() => UserCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLikesInput)
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
