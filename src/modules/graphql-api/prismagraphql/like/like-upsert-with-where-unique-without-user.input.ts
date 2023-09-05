import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutUserInput } from './like-update-without-user.input';
import { LikeCreateWithoutUserInput } from './like-create-without-user.input';

@InputType()
export class LikeUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;

    @Field(() => LikeUpdateWithoutUserInput, {nullable:false})
    @Type(() => LikeUpdateWithoutUserInput)
    update!: LikeUpdateWithoutUserInput;

    @Field(() => LikeCreateWithoutUserInput, {nullable:false})
    @Type(() => LikeCreateWithoutUserInput)
    create!: LikeCreateWithoutUserInput;
}
