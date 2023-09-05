import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { ArticleImageListRelationFilter } from '../article-image/article-image-list-relation-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';

@InputType()
export class ArticleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => [ArticleWhereInput], {nullable:true})
    AND?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {nullable:true})
    OR?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {nullable:true})
    NOT?: Array<ArticleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => LikeListRelationFilter, {nullable:true})
    likes?: LikeListRelationFilter;

    @Field(() => ArticleImageListRelationFilter, {nullable:true})
    ArticleImage?: ArticleImageListRelationFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    Category?: CategoryRelationFilter;
}
