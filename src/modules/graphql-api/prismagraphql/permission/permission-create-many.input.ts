import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PermissionCreateallowedOperationsInput } from './permission-createallowed-operations.input';

@InputType()
export class PermissionCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    modelName!: string;

    @Field(() => PermissionCreateallowedOperationsInput, {nullable:true})
    allowedOperations?: PermissionCreateallowedOperationsInput;

    @Field(() => Int, {nullable:false})
    rolePermissionsId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
