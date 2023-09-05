import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prismagraphql/prisma';

@InputType()
export class LoginWhereInput {
    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;
    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;
    
}
