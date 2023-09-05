import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleImageUpdateManyMutationInput } from './article-image-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ArticleImageWhereInput } from './article-image-where.input';

@ArgsType()
export class UpdateManyArticleImageArgs {

    @Field(() => ArticleImageUpdateManyMutationInput, {nullable:false})
    @Type(() => ArticleImageUpdateManyMutationInput)
    data!: ArticleImageUpdateManyMutationInput;

    @Field(() => ArticleImageWhereInput, {nullable:true})
    @Type(() => ArticleImageWhereInput)
    where?: ArticleImageWhereInput;
}
