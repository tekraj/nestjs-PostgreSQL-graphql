import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../../prismagraphql/prisma';

@ArgsType()
export class LoginArgs {
    @Field(() => String, {nullable:false})
    email: string;
    @Field(() => String, {nullable:false})
    password: string;
}
