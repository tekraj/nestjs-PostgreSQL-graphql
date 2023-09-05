import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutUserInput } from './like-create-without-user.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutUserInput } from './like-create-or-connect-without-user.input';
import { LikeUpsertWithWhereUniqueWithoutUserInput } from './like-upsert-with-where-unique-without-user.input';
import { LikeCreateManyUserInputEnvelope } from './like-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutUserInput } from './like-update-with-where-unique-without-user.input';
import { LikeUpdateManyWithWhereWithoutUserInput } from './like-update-many-with-where-without-user.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [LikeCreateWithoutUserInput], {nullable:true})
    @Type(() => LikeCreateWithoutUserInput)
    create?: Array<LikeCreateWithoutUserInput>;

    @Field(() => [LikeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutUserInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LikeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => LikeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyUserInputEnvelope)
    createMany?: LikeCreateManyUserInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;

    @Field(() => [LikeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LikeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LikeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LikeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LikeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    @Type(() => LikeScalarWhereInput)
    deleteMany?: Array<LikeScalarWhereInput>;
}
