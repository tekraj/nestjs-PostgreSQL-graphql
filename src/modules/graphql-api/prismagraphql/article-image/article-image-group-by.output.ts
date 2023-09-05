import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArticleImageCountAggregate } from './article-image-count-aggregate.output';
import { ArticleImageAvgAggregate } from './article-image-avg-aggregate.output';
import { ArticleImageSumAggregate } from './article-image-sum-aggregate.output';
import { ArticleImageMinAggregate } from './article-image-min-aggregate.output';
import { ArticleImageMaxAggregate } from './article-image-max-aggregate.output';

@ObjectType()
export class ArticleImageGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    articleId!: number;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ArticleImageCountAggregate, {nullable:true})
    _count?: ArticleImageCountAggregate;

    @Field(() => ArticleImageAvgAggregate, {nullable:true})
    _avg?: ArticleImageAvgAggregate;

    @Field(() => ArticleImageSumAggregate, {nullable:true})
    _sum?: ArticleImageSumAggregate;

    @Field(() => ArticleImageMinAggregate, {nullable:true})
    _min?: ArticleImageMinAggregate;

    @Field(() => ArticleImageMaxAggregate, {nullable:true})
    _max?: ArticleImageMaxAggregate;
}
