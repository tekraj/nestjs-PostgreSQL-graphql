import { UserService } from "src/shared/services/user.service";
import {
  User,
  FindFirstUserArgs,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UserGroupBy,
  UserGroupByArgs,
  AggregateUser,
  UserAggregateArgs,
  CreateOneUserArgs,
  CreateManyUserArgs,
  UpdateOneUserArgs,
  UpdateManyUserArgs,
  DeleteOneUserArgs,
  DeleteManyUserArgs,
} from "../prismagraphql/user";
import { AffectedRows } from "../prismagraphql/prisma";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GqlJWTGuard } from "src/shared/guards/gql-jwt/gql-jwt.guard";
import { RolesGuard } from "src/shared/guards/roles/roles.guard";
import { UseGuards } from "@nestjs/common";
@UseGuards(GqlJWTGuard, RolesGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: false })
  findFirstUser(@Args() args: FindFirstUserArgs) {
    this.userService.findFirst(args);
  }

  @Query(() => User, { nullable: false })
  findUniqueUser(@Args() args: FindUniqueUserArgs) {
    return this.userService.findUnique(args);
  }

  @Query(() => [User], { nullable: false })
  listUsers(@Args() args: FindManyUserArgs) {
    return this.userService.findMany(args);
  }

  @Query(() => [UserGroupBy], { nullable: false })
  groupByUser(@Args() args: UserGroupByArgs) {
    return this.userService.groupBy(args);
  }

  @Query(() => AggregateUser, { nullable: false })
  aggregateUser(@Args() args: UserAggregateArgs) {
    return this.userService.aggregate(args);
  }

  @Mutation(() => User, { nullable: true })
  createUser(@Args() args: CreateOneUserArgs) {
    return this.userService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyUser(@Args() args: CreateManyUserArgs) {
    return this.userService.createMany(args);
  }

  @Mutation(() => User, { nullable: true })
  updateUser(@Args() args: UpdateOneUserArgs) {
    return this.userService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyUser(@Args() args: UpdateManyUserArgs) {
    return this.userService.updateMany(args);
  }

  @Mutation(() => User, { nullable: true })
  deleteUser(@Args() args: DeleteOneUserArgs) {
    return this.userService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyUser(@Args() args: DeleteManyUserArgs) {
    return this.userService.deleteMany(args);
  }
}
