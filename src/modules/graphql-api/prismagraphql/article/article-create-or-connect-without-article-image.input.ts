import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutArticleImageInput } from './article-create-without-article-image.input';

@InputType()
export class ArticleCreateOrConnectWithoutArticleImageInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>;

    @Field(() => ArticleCreateWithoutArticleImageInput, {nullable:false})
    @Type(() => ArticleCreateWithoutArticleImageInput)
    create!: ArticleCreateWithoutArticleImageInput;
}
