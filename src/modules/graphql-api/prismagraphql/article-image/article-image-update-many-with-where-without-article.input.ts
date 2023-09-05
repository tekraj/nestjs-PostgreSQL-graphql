import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleImageScalarWhereInput } from './article-image-scalar-where.input';
import { Type } from 'class-transformer';
import { ArticleImageUpdateManyMutationInput } from './article-image-update-many-mutation.input';

@InputType()
export class ArticleImageUpdateManyWithWhereWithoutArticleInput {

    @Field(() => ArticleImageScalarWhereInput, {nullable:false})
    @Type(() => ArticleImageScalarWhereInput)
    where!: ArticleImageScalarWhereInput;

    @Field(() => ArticleImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ArticleImageUpdateManyMutationInput)
    data!: ArticleImageUpdateManyMutationInput;
}
