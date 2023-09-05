import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArticleUncheckedCreateNestedManyWithoutCategoryInput } from '../article/article-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ArticleUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    articles?: ArticleUncheckedCreateNestedManyWithoutCategoryInput;
}
