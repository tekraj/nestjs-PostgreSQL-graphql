import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutArticlesInput } from './category-create-without-articles.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutArticlesInput } from './category-create-or-connect-without-articles.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutArticlesInput {

    @Field(() => CategoryCreateWithoutArticlesInput, {nullable:true})
    @Type(() => CategoryCreateWithoutArticlesInput)
    create?: CategoryCreateWithoutArticlesInput;

    @Field(() => CategoryCreateOrConnectWithoutArticlesInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutArticlesInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}
