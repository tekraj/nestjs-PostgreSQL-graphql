import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LikeScalarWhereWithAggregatesInput {

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    articleId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
