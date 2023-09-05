import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryCreateInput } from './category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCategoryArgs {

    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    data!: CategoryCreateInput;
}
