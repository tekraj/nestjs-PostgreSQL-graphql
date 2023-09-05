import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeCreateManyInput } from './like-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLikeArgs {

    @Field(() => [LikeCreateManyInput], {nullable:false})
    @Type(() => LikeCreateManyInput)
    data!: Array<LikeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
