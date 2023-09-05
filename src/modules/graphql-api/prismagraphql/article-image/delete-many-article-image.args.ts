import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleImageWhereInput } from './article-image-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyArticleImageArgs {

    @Field(() => ArticleImageWhereInput, {nullable:true})
    @Type(() => ArticleImageWhereInput)
    where?: ArticleImageWhereInput;
}
