import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';
import { ArticleImageCreateNestedManyWithoutArticleInput } from '../article-image/article-image-create-nested-many-without-article.input';
import { CategoryCreateNestedOneWithoutArticlesInput } from '../category/category-create-nested-one-without-articles.input';

@InputType()
export class ArticleCreateWithoutLikesInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:true})
    views?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentCreateNestedManyWithoutArticleInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutArticleInput;

    @Field(() => ArticleImageCreateNestedManyWithoutArticleInput, {nullable:true})
    ArticleImage?: ArticleImageCreateNestedManyWithoutArticleInput;

    @Field(() => CategoryCreateNestedOneWithoutArticlesInput, {nullable:false})
    Category!: CategoryCreateNestedOneWithoutArticlesInput;
}
