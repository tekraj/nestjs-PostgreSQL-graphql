import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleImageWhereInput } from './article-image-where.input';
import { Type } from 'class-transformer';
import { ArticleImageOrderByWithRelationInput } from './article-image-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleImageScalarFieldEnum } from './article-image-scalar-field.enum';

@ArgsType()
export class FindFirstArticleImageArgs {

    @Field(() => ArticleImageWhereInput, {nullable:true})
    @Type(() => ArticleImageWhereInput)
    where?: ArticleImageWhereInput;

    @Field(() => [ArticleImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ArticleImageOrderByWithRelationInput>;

    @Field(() => ArticleImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ArticleImageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ArticleImageScalarFieldEnum>;
}
