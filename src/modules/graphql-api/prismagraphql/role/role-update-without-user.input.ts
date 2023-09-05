import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleTypesFieldUpdateOperationsInput } from '../prisma/enum-role-types-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PermissionUpdateManyWithoutRoleNestedInput } from '../permission/permission-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleTypesFieldUpdateOperationsInput, {nullable:true})
    roleType?: EnumRoleTypesFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissions?: PermissionUpdateManyWithoutRoleNestedInput;
}
