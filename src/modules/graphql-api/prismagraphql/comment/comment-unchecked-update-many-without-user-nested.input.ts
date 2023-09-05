import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutUserInput } from './comment-create-without-user.input';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { CommentUpsertWithWhereUniqueWithoutUserInput } from './comment-upsert-with-where-unique-without-user.input';
import { CommentCreateManyUserInputEnvelope } from './comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutUserInput } from './comment-update-with-where-unique-without-user.input';
import { CommentUpdateManyWithWhereWithoutUserInput } from './comment-update-many-with-where-without-user.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class CommentUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [CommentCreateWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateWithoutUserInput)
    create?: Array<CommentCreateWithoutUserInput>;

    @Field(() => [CommentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutUserInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CommentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyUserInputEnvelope)
    createMany?: CommentCreateManyUserInputEnvelope;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}
