import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Operation } from '../prisma/operation.enum';

@InputType()
export class PermissionUpdateallowedOperationsInput {

    @Field(() => [Operation], {nullable:true})
    set?: Array<keyof typeof Operation>;

    @Field(() => [Operation], {nullable:true})
    push?: Array<keyof typeof Operation>;
}
