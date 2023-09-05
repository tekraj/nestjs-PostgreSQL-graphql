import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Article } from '../article/article.model';
import { User } from '../user/user.model';

@ObjectType()
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Int, {nullable:false})
    articleId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Article, {nullable:false})
    article?: Article;

    @Field(() => User, {nullable:false})
    user?: User;
}
