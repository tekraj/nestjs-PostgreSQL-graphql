import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeCreateInput } from './like-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLikeArgs {

    @Field(() => LikeCreateInput, {nullable:false})
    @Type(() => LikeCreateInput)
    data!: LikeCreateInput;
}
