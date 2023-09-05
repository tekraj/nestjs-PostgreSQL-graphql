import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyArticleInput } from './like-create-many-article.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyArticleInputEnvelope {

    @Field(() => [LikeCreateManyArticleInput], {nullable:false})
    @Type(() => LikeCreateManyArticleInput)
    data!: Array<LikeCreateManyArticleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
