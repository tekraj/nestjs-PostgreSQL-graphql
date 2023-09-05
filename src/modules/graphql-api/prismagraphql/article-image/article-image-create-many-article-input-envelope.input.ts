import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleImageCreateManyArticleInput } from './article-image-create-many-article.input';
import { Type } from 'class-transformer';

@InputType()
export class ArticleImageCreateManyArticleInputEnvelope {

    @Field(() => [ArticleImageCreateManyArticleInput], {nullable:false})
    @Type(() => ArticleImageCreateManyArticleInput)
    data!: Array<ArticleImageCreateManyArticleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
