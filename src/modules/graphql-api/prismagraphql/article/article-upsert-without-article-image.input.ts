import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateWithoutArticleImageInput } from './article-update-without-article-image.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutArticleImageInput } from './article-create-without-article-image.input';
import { ArticleWhereInput } from './article-where.input';

@InputType()
export class ArticleUpsertWithoutArticleImageInput {

    @Field(() => ArticleUpdateWithoutArticleImageInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutArticleImageInput)
    update!: ArticleUpdateWithoutArticleImageInput;

    @Field(() => ArticleCreateWithoutArticleImageInput, {nullable:false})
    @Type(() => ArticleCreateWithoutArticleImageInput)
    create!: ArticleCreateWithoutArticleImageInput;

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;
}
