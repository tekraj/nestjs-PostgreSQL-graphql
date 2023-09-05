import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryCreateManyInput } from './category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCategoryArgs {

    @Field(() => [CategoryCreateManyInput], {nullable:false})
    @Type(() => CategoryCreateManyInput)
    data!: Array<CategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
