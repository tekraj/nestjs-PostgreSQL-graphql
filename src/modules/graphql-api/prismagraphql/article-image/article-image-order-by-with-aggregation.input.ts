import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleImageCountOrderByAggregateInput } from './article-image-count-order-by-aggregate.input';
import { ArticleImageAvgOrderByAggregateInput } from './article-image-avg-order-by-aggregate.input';
import { ArticleImageMaxOrderByAggregateInput } from './article-image-max-order-by-aggregate.input';
import { ArticleImageMinOrderByAggregateInput } from './article-image-min-order-by-aggregate.input';
import { ArticleImageSumOrderByAggregateInput } from './article-image-sum-order-by-aggregate.input';

@InputType()
export class ArticleImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    articleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ArticleImageCountOrderByAggregateInput, {nullable:true})
    _count?: ArticleImageCountOrderByAggregateInput;

    @Field(() => ArticleImageAvgOrderByAggregateInput, {nullable:true})
    _avg?: ArticleImageAvgOrderByAggregateInput;

    @Field(() => ArticleImageMaxOrderByAggregateInput, {nullable:true})
    _max?: ArticleImageMaxOrderByAggregateInput;

    @Field(() => ArticleImageMinOrderByAggregateInput, {nullable:true})
    _min?: ArticleImageMinOrderByAggregateInput;

    @Field(() => ArticleImageSumOrderByAggregateInput, {nullable:true})
    _sum?: ArticleImageSumOrderByAggregateInput;
}
