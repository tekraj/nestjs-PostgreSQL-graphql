import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionUpdateManyMutationInput } from './permission-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PermissionWhereInput } from './permission-where.input';

@ArgsType()
export class UpdateManyPermissionArgs {

    @Field(() => PermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionUpdateManyMutationInput)
    data!: PermissionUpdateManyMutationInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;
}
