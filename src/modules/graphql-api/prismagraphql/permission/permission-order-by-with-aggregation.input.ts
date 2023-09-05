import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionCountOrderByAggregateInput } from './permission-count-order-by-aggregate.input';
import { PermissionAvgOrderByAggregateInput } from './permission-avg-order-by-aggregate.input';
import { PermissionMaxOrderByAggregateInput } from './permission-max-order-by-aggregate.input';
import { PermissionMinOrderByAggregateInput } from './permission-min-order-by-aggregate.input';
import { PermissionSumOrderByAggregateInput } from './permission-sum-order-by-aggregate.input';

@InputType()
export class PermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    modelName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    allowedOperations?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rolePermissionsId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PermissionCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionCountOrderByAggregateInput;

    @Field(() => PermissionAvgOrderByAggregateInput, {nullable:true})
    _avg?: PermissionAvgOrderByAggregateInput;

    @Field(() => PermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionMaxOrderByAggregateInput;

    @Field(() => PermissionMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionMinOrderByAggregateInput;

    @Field(() => PermissionSumOrderByAggregateInput, {nullable:true})
    _sum?: PermissionSumOrderByAggregateInput;
}
