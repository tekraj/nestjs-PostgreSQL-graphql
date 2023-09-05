import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleImageCreateManyInput } from './article-image-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyArticleImageArgs {

    @Field(() => [ArticleImageCreateManyInput], {nullable:false})
    @Type(() => ArticleImageCreateManyInput)
    data!: Array<ArticleImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
