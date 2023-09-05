import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentAvgAggregate } from './comment-avg-aggregate.output';
import { CommentSumAggregate } from './comment-sum-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';

@ObjectType()
export class AggregateComment {

    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: CommentCountAggregate;

    @Field(() => CommentAvgAggregate, {nullable:true})
    _avg?: CommentAvgAggregate;

    @Field(() => CommentSumAggregate, {nullable:true})
    _sum?: CommentSumAggregate;

    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: CommentMinAggregate;

    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: CommentMaxAggregate;
}
