import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionUpdateManyMutationInput } from './permission-update-many-mutation.input';

@InputType()
export class PermissionUpdateManyWithWhereWithoutRoleInput {

    @Field(() => PermissionScalarWhereInput, {nullable:false})
    @Type(() => PermissionScalarWhereInput)
    where!: PermissionScalarWhereInput;

    @Field(() => PermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionUpdateManyMutationInput)
    data!: PermissionUpdateManyMutationInput;
}
