import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CommentUncheckedUpdateManyWithoutArticleNestedInput } from '../comment/comment-unchecked-update-many-without-article-nested.input';
import { ArticleImageUncheckedUpdateManyWithoutArticleNestedInput } from '../article-image/article-image-unchecked-update-many-without-article-nested.input';

@InputType()
export class ArticleUncheckedUpdateWithoutLikesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    views?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    categoryId?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CommentUncheckedUpdateManyWithoutArticleNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutArticleNestedInput;

    @Field(() => ArticleImageUncheckedUpdateManyWithoutArticleNestedInput, {nullable:true})
    ArticleImage?: ArticleImageUncheckedUpdateManyWithoutArticleNestedInput;
}
