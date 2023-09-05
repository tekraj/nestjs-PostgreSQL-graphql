import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutArticleInput } from './like-update-without-article.input';

@InputType()
export class LikeUpdateWithWhereUniqueWithoutArticleInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;

    @Field(() => LikeUpdateWithoutArticleInput, {nullable:false})
    @Type(() => LikeUpdateWithoutArticleInput)
    data!: LikeUpdateWithoutArticleInput;
}
