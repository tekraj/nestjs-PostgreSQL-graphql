import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginData {
    @Field(() => String, {nullable:true})
    access_token?: string;
    @Field(() => Boolean, {nullable:false})
    status: boolean;
    @Field(() => String, {nullable:true})
    error?: string;
}
