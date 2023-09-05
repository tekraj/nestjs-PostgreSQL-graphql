import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LikeCountAggregate } from './like-count-aggregate.output';
import { LikeAvgAggregate } from './like-avg-aggregate.output';
import { LikeSumAggregate } from './like-sum-aggregate.output';
import { LikeMinAggregate } from './like-min-aggregate.output';
import { LikeMaxAggregate } from './like-max-aggregate.output';

@ObjectType()
export class AggregateLike {

    @Field(() => LikeCountAggregate, {nullable:true})
    _count?: LikeCountAggregate;

    @Field(() => LikeAvgAggregate, {nullable:true})
    _avg?: LikeAvgAggregate;

    @Field(() => LikeSumAggregate, {nullable:true})
    _sum?: LikeSumAggregate;

    @Field(() => LikeMinAggregate, {nullable:true})
    _min?: LikeMinAggregate;

    @Field(() => LikeMaxAggregate, {nullable:true})
    _max?: LikeMaxAggregate;
}
