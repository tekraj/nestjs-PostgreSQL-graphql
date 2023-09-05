import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutUserInput } from './like-create-without-user.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutUserInput } from './like-create-or-connect-without-user.input';
import { LikeCreateManyUserInputEnvelope } from './like-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [LikeCreateWithoutUserInput], {nullable:true})
    @Type(() => LikeCreateWithoutUserInput)
    create?: Array<LikeCreateWithoutUserInput>;

    @Field(() => [LikeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutUserInput>;

    @Field(() => LikeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyUserInputEnvelope)
    createMany?: LikeCreateManyUserInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
}
