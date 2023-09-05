import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ArticleUpdateOneRequiredWithoutLikesNestedInput } from '../article/article-update-one-required-without-likes-nested.input';

@InputType()
export class LikeUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ArticleUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    article?: ArticleUpdateOneRequiredWithoutLikesNestedInput;
}
