import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';
import { PermissionOrderByWithRelationInput } from './permission-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionCountAggregateInput } from './permission-count-aggregate.input';
import { PermissionAvgAggregateInput } from './permission-avg-aggregate.input';
import { PermissionSumAggregateInput } from './permission-sum-aggregate.input';
import { PermissionMinAggregateInput } from './permission-min-aggregate.input';
import { PermissionMaxAggregateInput } from './permission-max-aggregate.input';

@ArgsType()
export class PermissionAggregateArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;

    @Field(() => [PermissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionOrderByWithRelationInput>;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'modelName'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionCountAggregateInput, {nullable:true})
    _count?: PermissionCountAggregateInput;

    @Field(() => PermissionAvgAggregateInput, {nullable:true})
    _avg?: PermissionAvgAggregateInput;

    @Field(() => PermissionSumAggregateInput, {nullable:true})
    _sum?: PermissionSumAggregateInput;

    @Field(() => PermissionMinAggregateInput, {nullable:true})
    _min?: PermissionMinAggregateInput;

    @Field(() => PermissionMaxAggregateInput, {nullable:true})
    _max?: PermissionMaxAggregateInput;
}
