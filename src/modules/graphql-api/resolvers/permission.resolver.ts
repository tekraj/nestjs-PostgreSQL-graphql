import { PermissionService } from "src/shared/services/permission.service";
import {
  Permission,
  FindFirstPermissionArgs,
  FindUniquePermissionArgs,
  FindManyPermissionArgs,
  PermissionGroupBy,
  PermissionGroupByArgs,
  AggregatePermission,
  PermissionAggregateArgs,
  CreateOnePermissionArgs,
  CreateManyPermissionArgs,
  UpdateOnePermissionArgs,
  UpdateManyPermissionArgs,
  DeleteOnePermissionArgs,
  DeleteManyPermissionArgs,
} from "../prismagraphql/permission";
import { AffectedRows } from "../prismagraphql/prisma";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GqlJWTGuard } from "src/shared/guards/gql-jwt/gql-jwt.guard";
import { RolesGuard } from "src/shared/guards/roles/roles.guard";
import { UseGuards } from "@nestjs/common";
@UseGuards(GqlJWTGuard, RolesGuard)
@Resolver(() => Permission)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Query(() => Permission, { nullable: false })
  findFirstPermission(@Args() args: FindFirstPermissionArgs) {
    this.permissionService.findFirst(args);
  }

  @Query(() => Permission, { nullable: false })
  findUniquePermission(@Args() args: FindUniquePermissionArgs) {
    return this.permissionService.findUnique(args);
  }

  @Query(() => [Permission], { nullable: false })
  listPermissions(@Args() args: FindManyPermissionArgs) {
    return this.permissionService.findMany(args);
  }

  @Query(() => [PermissionGroupBy], { nullable: false })
  groupByPermission(@Args() args: PermissionGroupByArgs) {
    return this.permissionService.groupBy(args);
  }

  @Query(() => AggregatePermission, { nullable: false })
  aggregatePermission(@Args() args: PermissionAggregateArgs) {
    return this.permissionService.aggregate(args);
  }

  @Mutation(() => Permission, { nullable: true })
  createPermission(@Args() args: CreateOnePermissionArgs) {
    return this.permissionService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyPermission(@Args() args: CreateManyPermissionArgs) {
    return this.permissionService.createMany(args);
  }

  @Mutation(() => Permission, { nullable: true })
  updatePermission(@Args() args: UpdateOnePermissionArgs) {
    return this.permissionService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyPermission(@Args() args: UpdateManyPermissionArgs) {
    return this.permissionService.updateMany(args);
  }

  @Mutation(() => Permission, { nullable: true })
  deletePermission(@Args() args: DeleteOnePermissionArgs) {
    return this.permissionService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyPermission(@Args() args: DeleteManyPermissionArgs) {
    return this.permissionService.deleteMany(args);
  }
}
