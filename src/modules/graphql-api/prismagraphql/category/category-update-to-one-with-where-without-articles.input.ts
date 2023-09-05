import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutArticlesInput } from './category-update-without-articles.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutArticlesInput {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => CategoryUpdateWithoutArticlesInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutArticlesInput)
    data!: CategoryUpdateWithoutArticlesInput;
}
