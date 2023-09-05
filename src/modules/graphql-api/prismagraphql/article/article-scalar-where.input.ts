import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ArticleScalarWhereInput {

    @Field(() => [ArticleScalarWhereInput], {nullable:true})
    AND?: Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {nullable:true})
    OR?: Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {nullable:true})
    NOT?: Array<ArticleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    views?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
