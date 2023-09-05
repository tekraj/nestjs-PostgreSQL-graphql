import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateWithoutLikesInput } from './article-update-without-likes.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutLikesInput } from './article-create-without-likes.input';
import { ArticleWhereInput } from './article-where.input';

@InputType()
export class ArticleUpsertWithoutLikesInput {

    @Field(() => ArticleUpdateWithoutLikesInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutLikesInput)
    update!: ArticleUpdateWithoutLikesInput;

    @Field(() => ArticleCreateWithoutLikesInput, {nullable:false})
    @Type(() => ArticleCreateWithoutLikesInput)
    create!: ArticleCreateWithoutLikesInput;

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;
}
