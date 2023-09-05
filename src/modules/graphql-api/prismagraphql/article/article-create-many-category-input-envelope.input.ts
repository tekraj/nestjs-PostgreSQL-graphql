import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateManyCategoryInput } from './article-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class ArticleCreateManyCategoryInputEnvelope {

    @Field(() => [ArticleCreateManyCategoryInput], {nullable:false})
    @Type(() => ArticleCreateManyCategoryInput)
    data!: Array<ArticleCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
