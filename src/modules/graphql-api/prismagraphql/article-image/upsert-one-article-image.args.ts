import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleImageCreateInput } from './article-image-create.input';
import { ArticleImageUpdateInput } from './article-image-update.input';

@ArgsType()
export class UpsertOneArticleImageArgs {

    @Field(() => ArticleImageWhereUniqueInput, {nullable:false})
    @Type(() => ArticleImageWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>;

    @Field(() => ArticleImageCreateInput, {nullable:false})
    @Type(() => ArticleImageCreateInput)
    create!: ArticleImageCreateInput;

    @Field(() => ArticleImageUpdateInput, {nullable:false})
    @Type(() => ArticleImageUpdateInput)
    update!: ArticleImageUpdateInput;
}
