import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleCount {

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    likes?: number;

    @Field(() => Int, {nullable:false})
    ArticleImage?: number;
}