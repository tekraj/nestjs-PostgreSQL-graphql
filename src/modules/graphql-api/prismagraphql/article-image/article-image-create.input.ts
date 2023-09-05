import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedOneWithoutArticleImageInput } from '../article/article-create-nested-one-without-article-image.input';

@InputType()
export class ArticleImageCreateInput {

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ArticleCreateNestedOneWithoutArticleImageInput, {nullable:false})
    article!: ArticleCreateNestedOneWithoutArticleImageInput;
}
