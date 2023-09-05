import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeScalarWhereInput } from './like-scalar-where.input';
import { Type } from 'class-transformer';
import { LikeUpdateManyMutationInput } from './like-update-many-mutation.input';

@InputType()
export class LikeUpdateManyWithWhereWithoutUserInput {

    @Field(() => LikeScalarWhereInput, {nullable:false})
    @Type(() => LikeScalarWhereInput)
    where!: LikeScalarWhereInput;

    @Field(() => LikeUpdateManyMutationInput, {nullable:false})
    @Type(() => LikeUpdateManyMutationInput)
    data!: LikeUpdateManyMutationInput;
}
