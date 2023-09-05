import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutArticleInput } from './like-update-without-article.input';
import { LikeCreateWithoutArticleInput } from './like-create-without-article.input';

@InputType()
export class LikeUpsertWithWhereUniqueWithoutArticleInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;

    @Field(() => LikeUpdateWithoutArticleInput, {nullable:false})
    @Type(() => LikeUpdateWithoutArticleInput)
    update!: LikeUpdateWithoutArticleInput;

    @Field(() => LikeCreateWithoutArticleInput, {nullable:false})
    @Type(() => LikeCreateWithoutArticleInput)
    create!: LikeCreateWithoutArticleInput;
}
