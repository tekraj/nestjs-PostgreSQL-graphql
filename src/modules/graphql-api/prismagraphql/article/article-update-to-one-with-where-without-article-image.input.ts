import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutArticleImageInput } from './article-update-without-article-image.input';

@InputType()
export class ArticleUpdateToOneWithWhereWithoutArticleImageInput {

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;

    @Field(() => ArticleUpdateWithoutArticleImageInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutArticleImageInput)
    data!: ArticleUpdateWithoutArticleImageInput;
}
