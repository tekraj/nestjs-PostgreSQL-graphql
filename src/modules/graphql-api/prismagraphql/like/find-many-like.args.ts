import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';
import { Type } from 'class-transformer';
import { LikeOrderByWithRelationInput } from './like-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LikeScalarFieldEnum } from './like-scalar-field.enum';

@ArgsType()
export class FindManyLikeArgs {

    @Field(() => LikeWhereInput, {nullable:true})
    @Type(() => LikeWhereInput)
    where?: LikeWhereInput;

    @Field(() => [LikeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LikeOrderByWithRelationInput>;

    @Field(() => LikeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LikeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LikeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LikeScalarFieldEnum>;
}
