import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArticleImageCountAggregate } from './article-image-count-aggregate.output';
import { ArticleImageAvgAggregate } from './article-image-avg-aggregate.output';
import { ArticleImageSumAggregate } from './article-image-sum-aggregate.output';
import { ArticleImageMinAggregate } from './article-image-min-aggregate.output';
import { ArticleImageMaxAggregate } from './article-image-max-aggregate.output';

@ObjectType()
export class AggregateArticleImage {

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
