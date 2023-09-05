import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleImageWhereInput } from './article-image-where.input';

@InputType()
export class ArticleImageListRelationFilter {

    @Field(() => ArticleImageWhereInput, {nullable:true})
    every?: ArticleImageWhereInput;

    @Field(() => ArticleImageWhereInput, {nullable:true})
    some?: ArticleImageWhereInput;

    @Field(() => ArticleImageWhereInput, {nullable:true})
    none?: ArticleImageWhereInput;
}
