import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleImageUpdateInput } from './article-image-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';

@ArgsType()
export class UpdateOneArticleImageArgs {

    @Field(() => ArticleImageUpdateInput, {nullable:false})
    @Type(() => ArticleImageUpdateInput)
    data!: ArticleImageUpdateInput;

    @Field(() => ArticleImageWhereUniqueInput, {nullable:false})
    @Type(() => ArticleImageWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>;
}
