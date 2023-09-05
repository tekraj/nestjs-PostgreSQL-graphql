import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedManyWithoutCategoryInput } from '../article/article-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ArticleCreateNestedManyWithoutCategoryInput, {nullable:true})
    articles?: ArticleCreateNestedManyWithoutCategoryInput;
}
