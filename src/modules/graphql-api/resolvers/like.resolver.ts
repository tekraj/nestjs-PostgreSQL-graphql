import { LikeService } from "src/shared/services/like.service";
import {
  Like,
  FindFirstLikeArgs,
  FindUniqueLikeArgs,
  FindManyLikeArgs,
  LikeGroupBy,
  LikeGroupByArgs,
  AggregateLike,
  LikeAggregateArgs,
  CreateOneLikeArgs,
  CreateManyLikeArgs,
  UpdateOneLikeArgs,
  UpdateManyLikeArgs,
  DeleteOneLikeArgs,
  DeleteManyLikeArgs,
} from "../prismagraphql/like";
import { AffectedRows } from "../prismagraphql/prisma";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GqlJWTGuard } from "src/shared/guards/gql-jwt/gql-jwt.guard";
import { RolesGuard } from "src/shared/guards/roles/roles.guard";
import { UseGuards } from "@nestjs/common";
@UseGuards(GqlJWTGuard, RolesGuard)
@Resolver(() => Like)
export class LikeResolver {
  constructor(private readonly likeService: LikeService) {}

  @Query(() => Like, { nullable: false })
  findFirstLike(@Args() args: FindFirstLikeArgs) {
    this.likeService.findFirst(args);
  }

  @Query(() => Like, { nullable: false })
  findUniqueLike(@Args() args: FindUniqueLikeArgs) {
    return this.likeService.findUnique(args);
  }

  @Query(() => [Like], { nullable: false })
  listLikes(@Args() args: FindManyLikeArgs) {
    return this.likeService.findMany(args);
  }

  @Query(() => [LikeGroupBy], { nullable: false })
  groupByLike(@Args() args: LikeGroupByArgs) {
    return this.likeService.groupBy(args);
  }

  @Query(() => AggregateLike, { nullable: false })
  aggregateLike(@Args() args: LikeAggregateArgs) {
    return this.likeService.aggregate(args);
  }

  @Mutation(() => Like, { nullable: true })
  createLike(@Args() args: CreateOneLikeArgs) {
    return this.likeService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyLike(@Args() args: CreateManyLikeArgs) {
    return this.likeService.createMany(args);
  }

  @Mutation(() => Like, { nullable: true })
  updateLike(@Args() args: UpdateOneLikeArgs) {
    return this.likeService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyLike(@Args() args: UpdateManyLikeArgs) {
    return this.likeService.updateMany(args);
  }

  @Mutation(() => Like, { nullable: true })
  deleteLike(@Args() args: DeleteOneLikeArgs) {
    return this.likeService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyLike(@Args() args: DeleteManyLikeArgs) {
    return this.likeService.deleteMany(args);
  }
}
