import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyUserInput } from './like-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyUserInputEnvelope {

    @Field(() => [LikeCreateManyUserInput], {nullable:false})
    @Type(() => LikeCreateManyUserInput)
    data!: Array<LikeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
