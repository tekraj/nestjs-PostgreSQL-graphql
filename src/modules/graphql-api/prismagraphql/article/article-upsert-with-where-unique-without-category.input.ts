import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutCategoryInput } from './article-update-without-category.input';
import { ArticleCreateWithoutCategoryInput } from './article-create-without-category.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>;

    @Field(() => ArticleUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutCategoryInput)
    update!: ArticleUpdateWithoutCategoryInput;

    @Field(() => ArticleCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ArticleCreateWithoutCategoryInput)
    create!: ArticleCreateWithoutCategoryInput;
}
