import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateallowedOperationsInput } from './permission-createallowed-operations.input';

@InputType()
export class PermissionCreateWithoutRoleInput {

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => PermissionCreateallowedOperationsInput, {nullable:true})
    allowedOperations?: PermissionCreateallowedOperationsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
