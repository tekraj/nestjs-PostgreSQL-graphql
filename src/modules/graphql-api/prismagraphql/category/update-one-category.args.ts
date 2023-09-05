import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryUpdateInput } from './category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@ArgsType()
export class UpdateOneCategoryArgs {

    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    data!: CategoryUpdateInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}
