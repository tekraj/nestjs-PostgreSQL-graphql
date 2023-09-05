import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutUserInput } from './comment-update-without-user.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

    @Field(() => CommentUpdateWithoutUserInput, {nullable:false})
    @Type(() => CommentUpdateWithoutUserInput)
    data!: CommentUpdateWithoutUserInput;
}
