import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPermissionArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;
}
