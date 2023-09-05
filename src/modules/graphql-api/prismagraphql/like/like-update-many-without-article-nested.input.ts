import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutArticleInput } from './like-create-without-article.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutArticleInput } from './like-create-or-connect-without-article.input';
import { LikeUpsertWithWhereUniqueWithoutArticleInput } from './like-upsert-with-where-unique-without-article.input';
import { LikeCreateManyArticleInputEnvelope } from './like-create-many-article-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutArticleInput } from './like-update-with-where-unique-without-article.input';
import { LikeUpdateManyWithWhereWithoutArticleInput } from './like-update-many-with-where-without-article.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUpdateManyWithoutArticleNestedInput {

    @Field(() => [LikeCreateWithoutArticleInput], {nullable:true})
    @Type(() => LikeCreateWithoutArticleInput)
    create?: Array<LikeCreateWithoutArticleInput>;

    @Field(() => [LikeCreateOrConnectWithoutArticleInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutArticleInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutArticleInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutArticleInput], {nullable:true})
    @Type(() => LikeUpsertWithWhereUniqueWithoutArticleInput)
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutArticleInput>;

    @Field(() => LikeCreateManyArticleInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyArticleInputEnvelope)
    createMany?: LikeCreateManyArticleInputEnvelope;

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

    @Field(() => [LikeUpdateWithWhereUniqueWithoutArticleInput], {nullable:true})
    @Type(() => LikeUpdateWithWhereUniqueWithoutArticleInput)
    update?: Array<LikeUpdateWithWhereUniqueWithoutArticleInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutArticleInput], {nullable:true})
    @Type(() => LikeUpdateManyWithWhereWithoutArticleInput)
    updateMany?: Array<LikeUpdateManyWithWhereWithoutArticleInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    @Type(() => LikeScalarWhereInput)
    deleteMany?: Array<LikeScalarWhereInput>;
}
