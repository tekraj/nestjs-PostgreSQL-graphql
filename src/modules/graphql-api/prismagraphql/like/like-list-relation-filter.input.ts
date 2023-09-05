import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';

@InputType()
export class LikeListRelationFilter {

    @Field(() => LikeWhereInput, {nullable:true})
    every?: LikeWhereInput;

    @Field(() => LikeWhereInput, {nullable:true})
    some?: LikeWhereInput;

    @Field(() => LikeWhereInput, {nullable:true})
    none?: LikeWhereInput;
}
