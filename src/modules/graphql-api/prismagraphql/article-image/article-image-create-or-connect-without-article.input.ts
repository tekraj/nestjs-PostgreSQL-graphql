import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleImageCreateWithoutArticleInput } from './article-image-create-without-article.input';

@InputType()
export class ArticleImageCreateOrConnectWithoutArticleInput {

    @Field(() => ArticleImageWhereUniqueInput, {nullable:false})
    @Type(() => ArticleImageWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>;

    @Field(() => ArticleImageCreateWithoutArticleInput, {nullable:false})
    @Type(() => ArticleImageCreateWithoutArticleInput)
    create!: ArticleImageCreateWithoutArticleInput;
}
