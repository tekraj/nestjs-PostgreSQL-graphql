import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleImageCreateWithoutArticleInput } from './article-image-create-without-article.input';
import { Type } from 'class-transformer';
import { ArticleImageCreateOrConnectWithoutArticleInput } from './article-image-create-or-connect-without-article.input';
import { ArticleImageCreateManyArticleInputEnvelope } from './article-image-create-many-article-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';

@InputType()
export class ArticleImageUncheckedCreateNestedManyWithoutArticleInput {

    @Field(() => [ArticleImageCreateWithoutArticleInput], {nullable:true})
    @Type(() => ArticleImageCreateWithoutArticleInput)
    create?: Array<ArticleImageCreateWithoutArticleInput>;

    @Field(() => [ArticleImageCreateOrConnectWithoutArticleInput], {nullable:true})
    @Type(() => ArticleImageCreateOrConnectWithoutArticleInput)
    connectOrCreate?: Array<ArticleImageCreateOrConnectWithoutArticleInput>;

    @Field(() => ArticleImageCreateManyArticleInputEnvelope, {nullable:true})
    @Type(() => ArticleImageCreateManyArticleInputEnvelope)
    createMany?: ArticleImageCreateManyArticleInputEnvelope;

    @Field(() => [ArticleImageWhereUniqueInput], {nullable:true})
    @Type(() => ArticleImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>>;
}
