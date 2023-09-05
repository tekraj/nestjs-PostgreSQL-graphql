import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueArticleImageOrThrowArgs {

    @Field(() => ArticleImageWhereUniqueInput, {nullable:false})
    @Type(() => ArticleImageWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>;
}
