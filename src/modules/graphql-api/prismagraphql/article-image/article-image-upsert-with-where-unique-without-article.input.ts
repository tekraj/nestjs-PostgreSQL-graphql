import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleImageUpdateWithoutArticleInput } from './article-image-update-without-article.input';
import { ArticleImageCreateWithoutArticleInput } from './article-image-create-without-article.input';

@InputType()
export class ArticleImageUpsertWithWhereUniqueWithoutArticleInput {

    @Field(() => ArticleImageWhereUniqueInput, {nullable:false})
    @Type(() => ArticleImageWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>;

    @Field(() => ArticleImageUpdateWithoutArticleInput, {nullable:false})
    @Type(() => ArticleImageUpdateWithoutArticleInput)
    update!: ArticleImageUpdateWithoutArticleInput;

    @Field(() => ArticleImageCreateWithoutArticleInput, {nullable:false})
    @Type(() => ArticleImageCreateWithoutArticleInput)
    create!: ArticleImageCreateWithoutArticleInput;
}
