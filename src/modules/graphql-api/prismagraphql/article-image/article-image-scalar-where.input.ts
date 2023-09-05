import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ArticleImageScalarWhereInput {

    @Field(() => [ArticleImageScalarWhereInput], {nullable:true})
    AND?: Array<ArticleImageScalarWhereInput>;

    @Field(() => [ArticleImageScalarWhereInput], {nullable:true})
    OR?: Array<ArticleImageScalarWhereInput>;

    @Field(() => [ArticleImageScalarWhereInput], {nullable:true})
    NOT?: Array<ArticleImageScalarWhereInput>;

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
}
