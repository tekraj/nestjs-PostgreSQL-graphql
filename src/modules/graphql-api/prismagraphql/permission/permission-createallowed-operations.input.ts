import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Operation } from '../prisma/operation.enum';

@InputType()
export class PermissionCreateallowedOperationsInput {

    @Field(() => [Operation], {nullable:false})
    set!: Array<keyof typeof Operation>;
}
