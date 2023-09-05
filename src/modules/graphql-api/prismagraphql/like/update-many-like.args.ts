import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeUpdateManyMutationInput } from './like-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LikeWhereInput } from './like-where.input';

@ArgsType()
export class UpdateManyLikeArgs {

    @Field(() => LikeUpdateManyMutationInput, {nullable:false})
    @Type(() => LikeUpdateManyMutationInput)
    data!: LikeUpdateManyMutationInput;

    @Field(() => LikeWhereInput, {nullable:true})
    @Type(() => LikeWhereInput)
    where?: LikeWhereInput;
}
