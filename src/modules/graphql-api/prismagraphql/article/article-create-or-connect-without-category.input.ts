import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutCategoryInput } from './article-create-without-category.input';

@InputType()
export class ArticleCreateOrConnectWithoutCategoryInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>;

    @Field(() => ArticleCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ArticleCreateWithoutCategoryInput)
    create!: ArticleCreateWithoutCategoryInput;
}
