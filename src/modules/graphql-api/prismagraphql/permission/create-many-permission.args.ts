import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionCreateManyInput } from './permission-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPermissionArgs {

    @Field(() => [PermissionCreateManyInput], {nullable:false})
    @Type(() => PermissionCreateManyInput)
    data!: Array<PermissionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
