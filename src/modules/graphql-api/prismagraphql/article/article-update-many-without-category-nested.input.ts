import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutCategoryInput } from './article-create-without-category.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutCategoryInput } from './article-create-or-connect-without-category.input';
import { ArticleUpsertWithWhereUniqueWithoutCategoryInput } from './article-upsert-with-where-unique-without-category.input';
import { ArticleCreateManyCategoryInputEnvelope } from './article-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutCategoryInput } from './article-update-with-where-unique-without-category.input';
import { ArticleUpdateManyWithWhereWithoutCategoryInput } from './article-update-many-with-where-without-category.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';

@InputType()
export class ArticleUpdateManyWithoutCategoryNestedInput {

    @Field(() => [ArticleCreateWithoutCategoryInput], {nullable:true})
    @Type(() => ArticleCreateWithoutCategoryInput)
    create?: Array<ArticleCreateWithoutCategoryInput>;

    @Field(() => [ArticleCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutCategoryInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ArticleUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => ArticleCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => ArticleCreateManyCategoryInputEnvelope)
    createMany?: ArticleCreateManyCategoryInputEnvelope;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>>;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>>;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>>;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => ArticleUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<ArticleUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => ArticleUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<ArticleUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [ArticleScalarWhereInput], {nullable:true})
    @Type(() => ArticleScalarWhereInput)
    deleteMany?: Array<ArticleScalarWhereInput>;
}
