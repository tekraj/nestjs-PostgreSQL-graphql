import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumOperationNullableListFilter } from '../prisma/enum-operation-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PermissionScalarWhereInput {

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    AND?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    OR?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    modelName?: StringFilter;

    @Field(() => EnumOperationNullableListFilter, {nullable:true})
    allowedOperations?: EnumOperationNullableListFilter;

    @Field(() => IntFilter, {nullable:true})
    rolePermissionsId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
