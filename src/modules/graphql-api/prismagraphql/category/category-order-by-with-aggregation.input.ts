import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CategoryCountOrderByAggregateInput } from './category-count-order-by-aggregate.input';
import { CategoryAvgOrderByAggregateInput } from './category-avg-order-by-aggregate.input';
import { CategoryMaxOrderByAggregateInput } from './category-max-order-by-aggregate.input';
import { CategoryMinOrderByAggregateInput } from './category-min-order-by-aggregate.input';
import { CategorySumOrderByAggregateInput } from './category-sum-order-by-aggregate.input';

@InputType()
export class CategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: CategoryCountOrderByAggregateInput;

    @Field(() => CategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: CategoryAvgOrderByAggregateInput;

    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: CategoryMaxOrderByAggregateInput;

    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: CategoryMinOrderByAggregateInput;

    @Field(() => CategorySumOrderByAggregateInput, {nullable:true})
    _sum?: CategorySumOrderByAggregateInput;
}
