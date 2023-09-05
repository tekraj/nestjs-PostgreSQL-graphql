import { ArticleImageService } from "src/shared/services/article-image.service";
import {
  ArticleImage,
  FindFirstArticleImageArgs,
  FindUniqueArticleImageArgs,
  FindManyArticleImageArgs,
  ArticleImageGroupBy,
  ArticleImageGroupByArgs,
  AggregateArticleImage,
  ArticleImageAggregateArgs,
  CreateOneArticleImageArgs,
  CreateManyArticleImageArgs,
  UpdateOneArticleImageArgs,
  UpdateManyArticleImageArgs,
  DeleteOneArticleImageArgs,
  DeleteManyArticleImageArgs,
} from "../prismagraphql/article-image";
import { AffectedRows } from "../prismagraphql/prisma";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GqlJWTGuard } from "src/shared/guards/gql-jwt/gql-jwt.guard";
import { RolesGuard } from "src/shared/guards/roles/roles.guard";
import { UseGuards } from "@nestjs/common";
@UseGuards(GqlJWTGuard, RolesGuard)
@Resolver(() => ArticleImage)
export class ArticleImageResolver {
  constructor(private readonly articleImageService: ArticleImageService) {}

  @Query(() => ArticleImage, { nullable: false })
  findFirstArticleImage(@Args() args: FindFirstArticleImageArgs) {
    this.articleImageService.findFirst(args);
  }

  @Query(() => ArticleImage, { nullable: false })
  findUniqueArticleImage(@Args() args: FindUniqueArticleImageArgs) {
    return this.articleImageService.findUnique(args);
  }

  @Query(() => [ArticleImage], { nullable: false })
  listArticleImages(@Args() args: FindManyArticleImageArgs) {
    return this.articleImageService.findMany(args);
  }

  @Query(() => [ArticleImageGroupBy], { nullable: false })
  groupByArticleImage(@Args() args: ArticleImageGroupByArgs) {
    return this.articleImageService.groupBy(args);
  }

  @Query(() => AggregateArticleImage, { nullable: false })
  aggregateArticleImage(@Args() args: ArticleImageAggregateArgs) {
    return this.articleImageService.aggregate(args);
  }

  @Mutation(() => ArticleImage, { nullable: true })
  createArticleImage(@Args() args: CreateOneArticleImageArgs) {
    return this.articleImageService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyArticleImage(@Args() args: CreateManyArticleImageArgs) {
    return this.articleImageService.createMany(args);
  }

  @Mutation(() => ArticleImage, { nullable: true })
  updateArticleImage(@Args() args: UpdateOneArticleImageArgs) {
    return this.articleImageService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyArticleImage(@Args() args: UpdateManyArticleImageArgs) {
    return this.articleImageService.updateMany(args);
  }

  @Mutation(() => ArticleImage, { nullable: true })
  deleteArticleImage(@Args() args: DeleteOneArticleImageArgs) {
    return this.articleImageService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyArticleImage(@Args() args: DeleteManyArticleImageArgs) {
    return this.articleImageService.deleteMany(args);
  }
}
