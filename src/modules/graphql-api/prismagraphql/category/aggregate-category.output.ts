import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CategoryCountAggregate } from './category-count-aggregate.output';
import { CategoryAvgAggregate } from './category-avg-aggregate.output';
import { CategorySumAggregate } from './category-sum-aggregate.output';
import { CategoryMinAggregate } from './category-min-aggregate.output';
import { CategoryMaxAggregate } from './category-max-aggregate.output';

@ObjectType()
export class AggregateCategory {

    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: CategoryCountAggregate;

    @Field(() => CategoryAvgAggregate, {nullable:true})
    _avg?: CategoryAvgAggregate;

    @Field(() => CategorySumAggregate, {nullable:true})
    _sum?: CategorySumAggregate;

    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: CategoryMinAggregate;

    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: CategoryMaxAggregate;
}
