import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ArticleUpdateOneRequiredWithoutArticleImageNestedInput } from '../article/article-update-one-required-without-article-image-nested.input';

@InputType()
export class ArticleImageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    imageUrl?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ArticleUpdateOneRequiredWithoutArticleImageNestedInput, {nullable:true})
    article?: ArticleUpdateOneRequiredWithoutArticleImageNestedInput;
}
