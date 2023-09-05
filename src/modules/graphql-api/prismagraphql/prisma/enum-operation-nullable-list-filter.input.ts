import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Operation } from './operation.enum';

@InputType()
export class EnumOperationNullableListFilter {

    @Field(() => [Operation], {nullable:true})
    equals?: Array<keyof typeof Operation>;

    @Field(() => Operation, {nullable:true})
    has?: keyof typeof Operation;

    @Field(() => [Operation], {nullable:true})
    hasEvery?: Array<keyof typeof Operation>;

    @Field(() => [Operation], {nullable:true})
    hasSome?: Array<keyof typeof Operation>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
