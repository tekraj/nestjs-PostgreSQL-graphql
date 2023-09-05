import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutArticlesInput } from './category-create-without-articles.input';

@InputType()
export class CategoryCreateOrConnectWithoutArticlesInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => CategoryCreateWithoutArticlesInput, {nullable:false})
    @Type(() => CategoryCreateWithoutArticlesInput)
    create!: CategoryCreateWithoutArticlesInput;
}
