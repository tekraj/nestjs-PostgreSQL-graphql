import { registerEnumType } from '@nestjs/graphql';

export enum LikeScalarFieldEnum {
    id = "id",
    userId = "userId",
    articleId = "articleId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LikeScalarFieldEnum, { name: 'LikeScalarFieldEnum', description: undefined })
