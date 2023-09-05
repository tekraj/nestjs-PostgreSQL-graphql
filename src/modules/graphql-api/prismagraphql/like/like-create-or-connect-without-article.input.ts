import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutArticleInput } from './like-create-without-article.input';

@InputType()
export class LikeCreateOrConnectWithoutArticleInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;

    @Field(() => LikeCreateWithoutArticleInput, {nullable:false})
    @Type(() => LikeCreateWithoutArticleInput)
    create!: LikeCreateWithoutArticleInput;
}
