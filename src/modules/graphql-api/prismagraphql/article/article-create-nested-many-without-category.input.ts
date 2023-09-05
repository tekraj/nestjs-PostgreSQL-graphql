import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutCategoryInput } from './article-create-without-category.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutCategoryInput } from './article-create-or-connect-without-category.input';
import { ArticleCreateManyCategoryInputEnvelope } from './article-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedManyWithoutCategoryInput {

    @Field(() => [ArticleCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ArticleCreateWithoutCategoryInput)
    create?: Array<ArticleCreateWithoutCategoryInput>;

    @Field(() => [ArticleCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutCategoryInput>;

    @Field(() => ArticleCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ArticleCreateManyCategoryInputEnvelope)
    createMany?: ArticleCreateManyCategoryInputEnvelope;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>>;
}
