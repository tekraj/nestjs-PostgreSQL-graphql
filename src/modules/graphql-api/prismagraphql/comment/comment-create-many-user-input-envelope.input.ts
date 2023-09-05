import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateManyUserInput } from './comment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateManyUserInputEnvelope {

    @Field(() => [CommentCreateManyUserInput], {nullable:false})
    @Type(() => CommentCreateManyUserInput)
    data!: Array<CommentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
