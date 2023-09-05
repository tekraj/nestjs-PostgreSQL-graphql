import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentUncheckedCreateNestedManyWithoutArticleInput } from '../comment/comment-unchecked-create-nested-many-without-article.input';
import { LikeUncheckedCreateNestedManyWithoutArticleInput } from '../like/like-unchecked-create-nested-many-without-article.input';
import { ArticleImageUncheckedCreateNestedManyWithoutArticleInput } from '../article-image/article-image-unchecked-create-nested-many-without-article.input';

@InputType()
export class ArticleUncheckedCreateWithoutCategoryInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => CommentUncheckedCreateNestedManyWithoutArticleInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutArticleInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutArticleInput;

    @Field(() => ArticleImageUncheckedCreateNestedManyWithoutArticleInput, {nullable:true})
    ArticleImage?: ArticleImageUncheckedCreateNestedManyWithoutArticleInput;
}
