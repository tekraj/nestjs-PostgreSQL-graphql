import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutArticleImageInput } from './article-create-without-article-image.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutArticleImageInput } from './article-create-or-connect-without-article-image.input';
import { ArticleUpsertWithoutArticleImageInput } from './article-upsert-without-article-image.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateToOneWithWhereWithoutArticleImageInput } from './article-update-to-one-with-where-without-article-image.input';

@InputType()
export class ArticleUpdateOneRequiredWithoutArticleImageNestedInput {

    @Field(() => ArticleCreateWithoutArticleImageInput, {nullable:true})
    @Type(() => ArticleCreateWithoutArticleImageInput)
    create?: ArticleCreateWithoutArticleImageInput;

    @Field(() => ArticleCreateOrConnectWithoutArticleImageInput, {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutArticleImageInput)
    connectOrCreate?: ArticleCreateOrConnectWithoutArticleImageInput;

    @Field(() => ArticleUpsertWithoutArticleImageInput, {nullable:true})
    @Type(() => ArticleUpsertWithoutArticleImageInput)
    upsert?: ArticleUpsertWithoutArticleImageInput;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>;

    @Field(() => ArticleUpdateToOneWithWhereWithoutArticleImageInput, {nullable:true})
    @Type(() => ArticleUpdateToOneWithWhereWithoutArticleImageInput)
    update?: ArticleUpdateToOneWithWhereWithoutArticleImageInput;
}
