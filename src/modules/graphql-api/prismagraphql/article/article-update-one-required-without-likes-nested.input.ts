import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutLikesInput } from './article-create-without-likes.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutLikesInput } from './article-create-or-connect-without-likes.input';
import { ArticleUpsertWithoutLikesInput } from './article-upsert-without-likes.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateToOneWithWhereWithoutLikesInput } from './article-update-to-one-with-where-without-likes.input';

@InputType()
export class ArticleUpdateOneRequiredWithoutLikesNestedInput {

    @Field(() => ArticleCreateWithoutLikesInput, {nullable:true})
    @Type(() => ArticleCreateWithoutLikesInput)
    create?: ArticleCreateWithoutLikesInput;

    @Field(() => ArticleCreateOrConnectWithoutLikesInput, {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutLikesInput)
    connectOrCreate?: ArticleCreateOrConnectWithoutLikesInput;

    @Field(() => ArticleUpsertWithoutLikesInput, {nullable:true})
    @Type(() => ArticleUpsertWithoutLikesInput)
    upsert?: ArticleUpsertWithoutLikesInput;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'url'>;

    @Field(() => ArticleUpdateToOneWithWhereWithoutLikesInput, {nullable:true})
    @Type(() => ArticleUpdateToOneWithWhereWithoutLikesInput)
    update?: ArticleUpdateToOneWithWhereWithoutLikesInput;
}
