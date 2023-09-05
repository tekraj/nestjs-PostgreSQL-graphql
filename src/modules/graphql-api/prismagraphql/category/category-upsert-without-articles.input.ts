import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutArticlesInput } from './category-update-without-articles.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutArticlesInput } from './category-create-without-articles.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutArticlesInput {

    @Field(() => CategoryUpdateWithoutArticlesInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutArticlesInput)
    update!: CategoryUpdateWithoutArticlesInput;

    @Field(() => CategoryCreateWithoutArticlesInput, {nullable:false})
    @Type(() => CategoryCreateWithoutArticlesInput)
    create!: CategoryCreateWithoutArticlesInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
