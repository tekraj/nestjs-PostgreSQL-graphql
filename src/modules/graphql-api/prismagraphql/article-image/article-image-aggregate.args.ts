import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleImageWhereInput } from './article-image-where.input';
import { Type } from 'class-transformer';
import { ArticleImageOrderByWithRelationInput } from './article-image-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ArticleImageWhereUniqueInput } from './article-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleImageCountAggregateInput } from './article-image-count-aggregate.input';
import { ArticleImageAvgAggregateInput } from './article-image-avg-aggregate.input';
import { ArticleImageSumAggregateInput } from './article-image-sum-aggregate.input';
import { ArticleImageMinAggregateInput } from './article-image-min-aggregate.input';
import { ArticleImageMaxAggregateInput } from './article-image-max-aggregate.input';

@ArgsType()
export class ArticleImageAggregateArgs {

    @Field(() => ArticleImageWhereInput, {nullable:true})
    @Type(() => ArticleImageWhereInput)
    where?: ArticleImageWhereInput;

    @Field(() => [ArticleImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ArticleImageOrderByWithRelationInput>;

    @Field(() => ArticleImageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ArticleImageWhereUniqueInput, 'id'>;

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
