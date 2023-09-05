import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryOrderByWithRelationInput } from './category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CategoryScalarFieldEnum } from './category-scalar-field.enum';

@ArgsType()
export class FindFirstCategoryArgs {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}
