import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutLikesInput } from './article-create-without-likes.input';

@InputType()
export class ArticleCreateOrConnectWithoutLikesInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>;

    @Field(() => ArticleCreateWithoutLikesInput, {nullable:false})
    @Type(() => ArticleCreateWithoutLikesInput)
    create!: ArticleCreateWithoutLikesInput;
}
