import { ArticleService } from "src/shared/services/article.service";
import {
  Article,
  FindFirstArticleArgs,
  FindUniqueArticleArgs,
  FindManyArticleArgs,
  ArticleGroupBy,
  ArticleGroupByArgs,
  AggregateArticle,
  ArticleAggregateArgs,
  CreateOneArticleArgs,
  CreateManyArticleArgs,
  UpdateOneArticleArgs,
  UpdateManyArticleArgs,
  DeleteOneArticleArgs,
  DeleteManyArticleArgs,
} from "../prismagraphql/article";
import { AffectedRows } from "../prismagraphql/prisma";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GqlJWTGuard } from "src/shared/guards/gql-jwt/gql-jwt.guard";
import { RolesGuard } from "src/shared/guards/roles/roles.guard";
import { UseGuards } from "@nestjs/common";
@UseGuards(GqlJWTGuard, RolesGuard)
@Resolver(() => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query(() => Article, { nullable: false })
  findFirstArticle(@Args() args: FindFirstArticleArgs) {
    this.articleService.findFirst(args);
  }

  @Query(() => Article, { nullable: false })
  findUniqueArticle(@Args() args: FindUniqueArticleArgs) {
    return this.articleService.findUnique(args);
  }

  @Query(() => [Article], { nullable: false })
  listArticles(@Args() args: FindManyArticleArgs) {
    return this.articleService.findMany(args);
  }

  @Query(() => [ArticleGroupBy], { nullable: false })
  groupByArticle(@Args() args: ArticleGroupByArgs) {
    return this.articleService.groupBy(args);
  }

  @Query(() => AggregateArticle, { nullable: false })
  aggregateArticle(@Args() args: ArticleAggregateArgs) {
    return this.articleService.aggregate(args);
  }

  @Mutation(() => Article, { nullable: true })
  createArticle(@Args() args: CreateOneArticleArgs) {
    return this.articleService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyArticle(@Args() args: CreateManyArticleArgs) {
    return this.articleService.createMany(args);
  }

  @Mutation(() => Article, { nullable: true })
  updateArticle(@Args() args: UpdateOneArticleArgs) {
    return this.articleService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyArticle(@Args() args: UpdateManyArticleArgs) {
    return this.articleService.updateMany(args);
  }

  @Mutation(() => Article, { nullable: true })
  deleteArticle(@Args() args: DeleteOneArticleArgs) {
    return this.articleService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyArticle(@Args() args: DeleteManyArticleArgs) {
    return this.articleService.deleteMany(args);
  }
}
