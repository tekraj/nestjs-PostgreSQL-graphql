import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeUpdateInput } from './like-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@ArgsType()
export class UpdateOneLikeArgs {

    @Field(() => LikeUpdateInput, {nullable:false})
    @Type(() => LikeUpdateInput)
    data!: LikeUpdateInput;

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;
}
