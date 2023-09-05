import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Comment } from '../comment/comment.model';
import { Like } from '../like/like.model';
import { ArticleImage } from '../article-image/article-image.model';
import { Category } from '../category/category.model';
import { ArticleCount } from './article-count.output';

@ObjectType()
export class Article {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    views!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;

    @Field(() => [ArticleImage], {nullable:true})
    ArticleImage?: Array<ArticleImage>;

    @Field(() => Category, {nullable:false})
    Category?: Category;

    @Field(() => ArticleCount, {nullable:false})
    _count?: ArticleCount;
}
