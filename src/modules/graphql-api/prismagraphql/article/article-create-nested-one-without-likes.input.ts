import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutLikesInput } from './article-create-without-likes.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutLikesInput } from './article-create-or-connect-without-likes.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedOneWithoutLikesInput {

    @Field(() => ArticleCreateWithoutLikesInput, {nullable:true})
    @Type(() => ArticleCreateWithoutLikesInput)
    create?: ArticleCreateWithoutLikesInput;

    @Field(() => ArticleCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutLikesInput)
    connectOrCreate?: ArticleCreateOrConnectWithoutLikesInput;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>;
}
