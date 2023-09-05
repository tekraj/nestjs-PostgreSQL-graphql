import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ArticleRelationFilter } from '../article/article-relation-filter.input';

@InputType()
export class ArticleImageWhereInput {

    @Field(() => [ArticleImageWhereInput], {nullable:true})
    AND?: Array<ArticleImageWhereInput>;

    @Field(() => [ArticleImageWhereInput], {nullable:true})
    OR?: Array<ArticleImageWhereInput>;

    @Field(() => [ArticleImageWhereInput], {nullable:true})
    NOT?: Array<ArticleImageWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    articleId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    imageUrl?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ArticleRelationFilter, {nullable:true})
    article?: ArticleRelationFilter;
}
