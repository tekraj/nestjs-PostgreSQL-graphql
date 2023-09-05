import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArticleImageWhereInput } from './article-image-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ArticleRelationFilter } from '../article/article-relation-filter.input';

@InputType()
export class ArticleImageWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ArticleImageWhereInput], {nullable:true})
    AND?: Array<ArticleImageWhereInput>;

    @Field(() => [ArticleImageWhereInput], {nullable:true})
    OR?: Array<ArticleImageWhereInput>;

    @Field(() => [ArticleImageWhereInput], {nullable:true})
    NOT?: Array<ArticleImageWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    articleId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ArticleRelationFilter, {nullable:true})
    article?: ArticleRelationFilter;
}
