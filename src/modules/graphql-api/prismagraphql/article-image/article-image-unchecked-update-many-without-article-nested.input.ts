import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleImageCreateWithoutArticleInput } from './article-image-create-without-article.input';
import { Type } from 'class-transformer';
import { ArticleImageCreateOrConnectWithoutArticleInput } from './article-image-create-or-connect-without-article.input';
import { ArticleImageUpsertWithWhereUniqueWithoutArticleInput } from './article-image-upsert-with-where-unique-without-article.input';
import { ArticleImageCreateManyArticleInputEnvelope } from './article-image-create-many-article-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';
import { ArticleImageUpdateWithWhereUniqueWithoutArticleInput } from './article-image-update-with-where-unique-without-article.input';
import { ArticleImageUpdateManyWithWhereWithoutArticleInput } from './article-image-update-many-with-where-without-article.input';
import { ArticleImageScalarWhereInput } from './article-image-scalar-where.input';

@InputType()
export class ArticleImageUncheckedUpdateManyWithoutArticleNestedInput {

    @Field(() => [ArticleImageCreateWithoutArticleInput], {nullable:true})
    @Type(() => ArticleImageCreateWithoutArticleInput)
    create?: Array<ArticleImageCreateWithoutArticleInput>;

    @Field(() => [ArticleImageCreateOrConnectWithoutArticleInput], {nullable:true})
    @Type(() => ArticleImageCreateOrConnectWithoutArticleInput)
    connectOrCreate?: Array<ArticleImageCreateOrConnectWithoutArticleInput>;

    @Field(() => [ArticleImageUpsertWithWhereUniqueWithoutArticleInput], {nullable:true})
    @Type(() => ArticleImageUpsertWithWhereUniqueWithoutArticleInput)
    upsert?: Array<ArticleImageUpsertWithWhereUniqueWithoutArticleInput>;

    @Field(() => ArticleImageCreateManyArticleInputEnvelope, {nullable:true})
    @Type(() => ArticleImageCreateManyArticleInputEnvelope)
    createMany?: ArticleImageCreateManyArticleInputEnvelope;

    @Field(() => [ArticleImageWhereUniqueInput], {nullable:true})
    @Type(() => ArticleImageWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleImageWhereUniqueInput], {nullable:true})
    @Type(() => ArticleImageWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleImageWhereUniqueInput], {nullable:true})
    @Type(() => ArticleImageWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleImageWhereUniqueInput], {nullable:true})
    @Type(() => ArticleImageWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleImageUpdateWithWhereUniqueWithoutArticleInput], {nullable:true})
    @Type(() => ArticleImageUpdateWithWhereUniqueWithoutArticleInput)
    update?: Array<ArticleImageUpdateWithWhereUniqueWithoutArticleInput>;

    @Field(() => [ArticleImageUpdateManyWithWhereWithoutArticleInput], {nullable:true})
    @Type(() => ArticleImageUpdateManyWithWhereWithoutArticleInput)
    updateMany?: Array<ArticleImageUpdateManyWithWhereWithoutArticleInput>;

    @Field(() => [ArticleImageScalarWhereInput], {nullable:true})
    @Type(() => ArticleImageScalarWhereInput)
    deleteMany?: Array<ArticleImageScalarWhereInput>;
}
