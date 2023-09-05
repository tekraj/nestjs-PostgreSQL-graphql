import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';
import { Type } from 'class-transformer';
import { LikeOrderByWithAggregationInput } from './like-order-by-with-aggregation.input';
import { LikeScalarFieldEnum } from './like-scalar-field.enum';
import { LikeScalarWhereWithAggregatesInput } from './like-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LikeCountAggregateInput } from './like-count-aggregate.input';
import { LikeAvgAggregateInput } from './like-avg-aggregate.input';
import { LikeSumAggregateInput } from './like-sum-aggregate.input';
import { LikeMinAggregateInput } from './like-min-aggregate.input';
import { LikeMaxAggregateInput } from './like-max-aggregate.input';

@ArgsType()
export class LikeGroupByArgs {

    @Field(() => LikeWhereInput, {nullable:true})
    @Type(() => LikeWhereInput)
    where?: LikeWhereInput;

    @Field(() => [LikeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LikeOrderByWithAggregationInput>;

    @Field(() => [LikeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LikeScalarFieldEnum>;

    @Field(() => LikeScalarWhereWithAggregatesInput, {nullable:true})
    having?: LikeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LikeCountAggregateInput, {nullable:true})
    _count?: LikeCountAggregateInput;

    @Field(() => LikeAvgAggregateInput, {nullable:true})
    _avg?: LikeAvgAggregateInput;

    @Field(() => LikeSumAggregateInput, {nullable:true})
    _sum?: LikeSumAggregateInput;

    @Field(() => LikeMinAggregateInput, {nullable:true})
    _min?: LikeMinAggregateInput;

    @Field(() => LikeMaxAggregateInput, {nullable:true})
    _max?: LikeMaxAggregateInput;
}
