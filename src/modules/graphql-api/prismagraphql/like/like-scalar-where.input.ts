import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LikeScalarWhereInput {

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    AND?: Array<LikeScalarWhereInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    OR?: Array<LikeScalarWhereInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    NOT?: Array<LikeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    articleId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
