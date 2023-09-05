import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutArticleImageInput } from './article-create-without-article-image.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutArticleImageInput } from './article-create-or-connect-without-article-image.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedOneWithoutArticleImageInput {

    @Field(() => ArticleCreateWithoutArticleImageInput, {nullable:true})
    @Type(() => ArticleCreateWithoutArticleImageInput)
    create?: ArticleCreateWithoutArticleImageInput;

    @Field(() => ArticleCreateOrConnectWithoutArticleImageInput, {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutArticleImageInput)
    connectOrCreate?: ArticleCreateOrConnectWithoutArticleImageInput;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>;
}
