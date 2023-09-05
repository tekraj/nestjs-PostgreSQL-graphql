import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutLikesInput } from './article-update-without-likes.input';

@InputType()
export class ArticleUpdateToOneWithWhereWithoutLikesInput {

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;

    @Field(() => ArticleUpdateWithoutLikesInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutLikesInput)
    data!: ArticleUpdateWithoutLikesInput;
}
