import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedOneWithoutLikesInput } from '../article/article-create-nested-one-without-likes.input';

@InputType()
export class LikeCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ArticleCreateNestedOneWithoutLikesInput, {nullable:false})
    article!: ArticleCreateNestedOneWithoutLikesInput;
}
