import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutArticleInput } from './like-create-without-article.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutArticleInput } from './like-create-or-connect-without-article.input';
import { LikeCreateManyArticleInputEnvelope } from './like-create-many-article-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeUncheckedCreateNestedManyWithoutArticleInput {

    @Field(() => [LikeCreateWithoutArticleInput], {nullable:true})
    @Type(() => LikeCreateWithoutArticleInput)
    create?: Array<LikeCreateWithoutArticleInput>;

    @Field(() => [LikeCreateOrConnectWithoutArticleInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutArticleInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutArticleInput>;

    @Field(() => LikeCreateManyArticleInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyArticleInputEnvelope)
    createMany?: LikeCreateManyArticleInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id'>>;
}
