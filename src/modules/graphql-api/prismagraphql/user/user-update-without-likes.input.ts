import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableEnumRoleTypesFieldUpdateOperationsInput } from '../prisma/nullable-enum-role-types-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUserNestedInput } from '../role/role-update-one-required-without-user-nested.input';
import { CommentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutLikesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userStatus?: StringFieldUpdateOperationsInput;

    @Field(() => NullableEnumRoleTypesFieldUpdateOperationsInput, {nullable:true})
    roleType?: NullableEnumRoleTypesFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RoleUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutUserNestedInput;
}
