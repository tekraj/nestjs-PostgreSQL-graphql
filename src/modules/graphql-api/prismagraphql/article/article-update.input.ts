import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommentUpdateManyWithoutArticleNestedInput } from '../comment/comment-update-many-without-article-nested.input';
import { LikeUpdateManyWithoutArticleNestedInput } from '../like/like-update-many-without-article-nested.input';
import { ArticleImageUpdateManyWithoutArticleNestedInput } from '../article-image/article-image-update-many-without-article-nested.input';
import { CategoryUpdateOneRequiredWithoutArticlesNestedInput } from '../category/category-update-one-required-without-articles-nested.input';

@InputType()
export class ArticleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CommentUpdateManyWithoutArticleNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutArticleNestedInput;

    @Field(() => LikeUpdateManyWithoutArticleNestedInput, {nullable:true})
    likes?: LikeUpdateManyWithoutArticleNestedInput;

    @Field(() => ArticleImageUpdateManyWithoutArticleNestedInput, {nullable:true})
    ArticleImage?: ArticleImageUpdateManyWithoutArticleNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutArticlesNestedInput, {nullable:true})
    Category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput;
}
