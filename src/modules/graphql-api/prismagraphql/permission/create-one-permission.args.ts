import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionCreateInput } from './permission-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePermissionArgs {

    @Field(() => PermissionCreateInput, {nullable:false})
    @Type(() => PermissionCreateInput)
    data!: PermissionCreateInput;
}
