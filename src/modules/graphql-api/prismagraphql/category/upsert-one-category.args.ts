import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateInput } from './category-create.input';
import { CategoryUpdateInput } from './category-update.input';

@ArgsType()
export class UpsertOneCategoryArgs {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    create!: CategoryCreateInput;

    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    update!: CategoryUpdateInput;
}
