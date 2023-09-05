import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';
import { Type } from 'class-transformer';
import { LikeOrderByWithRelationInput } from './like-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LikeCountAggregateInput } from './like-count-aggregate.input';
import { LikeAvgAggregateInput } from './like-avg-aggregate.input';
import { LikeSumAggregateInput } from './like-sum-aggregate.input';
import { LikeMinAggregateInput } from './like-min-aggregate.input';
import { LikeMaxAggregateInput } from './like-max-aggregate.input';

@ArgsType()
export class LikeAggregateArgs {

    @Field(() => LikeWhereInput, {nullable:true})
    @Type(() => LikeWhereInput)
    where?: LikeWhereInput;

    @Field(() => [LikeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LikeOrderByWithRelationInput>;

    @Field(() => LikeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;

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
