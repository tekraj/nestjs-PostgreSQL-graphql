import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutArticlesInput } from './category-create-without-articles.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutArticlesInput } from './category-create-or-connect-without-articles.input';
import { CategoryUpsertWithoutArticlesInput } from './category-upsert-without-articles.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutArticlesInput } from './category-update-to-one-with-where-without-articles.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutArticlesNestedInput {

    @Field(() => CategoryCreateWithoutArticlesInput, {nullable:true})
    @Type(() => CategoryCreateWithoutArticlesInput)
    create?: CategoryCreateWithoutArticlesInput;

    @Field(() => CategoryCreateOrConnectWithoutArticlesInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutArticlesInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput;

    @Field(() => CategoryUpsertWithoutArticlesInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutArticlesInput)
    upsert?: CategoryUpsertWithoutArticlesInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutArticlesInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutArticlesInput)
    update?: CategoryUpdateToOneWithWhereWithoutArticlesInput;
}
