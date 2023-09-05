import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleImageWhereInput } from './article-image-where.input';
import { Type } from 'class-transformer';
import { ArticleImageOrderByWithAggregationInput } from './article-image-order-by-with-aggregation.input';
import { ArticleImageScalarFieldEnum } from './article-image-scalar-field.enum';
import { ArticleImageScalarWhereWithAggregatesInput } from './article-image-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ArticleImageCountAggregateInput } from './article-image-count-aggregate.input';
import { ArticleImageAvgAggregateInput } from './article-image-avg-aggregate.input';
import { ArticleImageSumAggregateInput } from './article-image-sum-aggregate.input';
import { ArticleImageMinAggregateInput } from './article-image-min-aggregate.input';
import { ArticleImageMaxAggregateInput } from './article-image-max-aggregate.input';

@ArgsType()
export class ArticleImageGroupByArgs {

    @Field(() => ArticleImageWhereInput, {nullable:true})
    @Type(() => ArticleImageWhereInput)
    where?: ArticleImageWhereInput;

    @Field(() => [ArticleImageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ArticleImageOrderByWithAggregationInput>;

    @Field(() => [ArticleImageScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ArticleImageScalarFieldEnum>;

    @Field(() => ArticleImageScalarWhereWithAggregatesInput, {nullable:true})
    having?: ArticleImageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ArticleImageCountAggregateInput, {nullable:true})
    _count?: ArticleImageCountAggregateInput;

    @Field(() => ArticleImageAvgAggregateInput, {nullable:true})
    _avg?: ArticleImageAvgAggregateInput;

    @Field(() => ArticleImageSumAggregateInput, {nullable:true})
    _sum?: ArticleImageSumAggregateInput;

    @Field(() => ArticleImageMinAggregateInput, {nullable:true})
    _min?: ArticleImageMinAggregateInput;

    @Field(() => ArticleImageMaxAggregateInput, {nullable:true})
    _max?: ArticleImageMaxAggregateInput;
}
