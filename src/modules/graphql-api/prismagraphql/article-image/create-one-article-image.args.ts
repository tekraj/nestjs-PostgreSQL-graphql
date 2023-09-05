import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleImageCreateInput } from './article-image-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneArticleImageArgs {

    @Field(() => ArticleImageCreateInput, {nullable:false})
    @Type(() => ArticleImageCreateInput)
    data!: ArticleImageCreateInput;
}
