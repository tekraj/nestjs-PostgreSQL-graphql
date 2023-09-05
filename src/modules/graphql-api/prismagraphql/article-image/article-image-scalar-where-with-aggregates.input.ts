import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ArticleImageScalarWhereWithAggregatesInput {

    @Field(() => [ArticleImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ArticleImageScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ArticleImageScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ArticleImageScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    articleId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imageUrl?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
