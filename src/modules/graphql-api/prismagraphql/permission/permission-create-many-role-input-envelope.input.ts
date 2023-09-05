import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateManyRoleInput } from './permission-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionCreateManyRoleInputEnvelope {

    @Field(() => [PermissionCreateManyRoleInput], {nullable:false})
    @Type(() => PermissionCreateManyRoleInput)
    data!: Array<PermissionCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
