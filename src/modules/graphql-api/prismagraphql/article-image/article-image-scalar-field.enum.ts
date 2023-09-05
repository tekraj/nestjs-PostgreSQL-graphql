import { registerEnumType } from '@nestjs/graphql';

export enum ArticleImageScalarFieldEnum {
    id = "id",
    articleId = "articleId",
    imageUrl = "imageUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ArticleImageScalarFieldEnum, { name: 'ArticleImageScalarFieldEnum', description: undefined })
