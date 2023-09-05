import { RoleService } from "src/shared/services/role.service";
import {
  Role,
  FindFirstRoleArgs,
  FindUniqueRoleArgs,
  FindManyRoleArgs,
  RoleGroupBy,
  RoleGroupByArgs,
  AggregateRole,
  RoleAggregateArgs,
  CreateOneRoleArgs,
  CreateManyRoleArgs,
  UpdateOneRoleArgs,
  UpdateManyRoleArgs,
  DeleteOneRoleArgs,
  DeleteManyRoleArgs,
} from "../prismagraphql/role";
import { AffectedRows } from "../prismagraphql/prisma";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GqlJWTGuard } from "src/shared/guards/gql-jwt/gql-jwt.guard";
import { RolesGuard } from "src/shared/guards/roles/roles.guard";
import { UseGuards } from "@nestjs/common";
@UseGuards(GqlJWTGuard, RolesGuard)
@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => Role, { nullable: false })
  findFirstRole(@Args() args: FindFirstRoleArgs) {
    this.roleService.findFirst(args);
  }

  @Query(() => Role, { nullable: false })
  findUniqueRole(@Args() args: FindUniqueRoleArgs) {
    return this.roleService.findUnique(args);
  }

  @Query(() => [Role], { nullable: false })
  listRoles(@Args() args: FindManyRoleArgs) {
    return this.roleService.findMany(args);
  }

  @Query(() => [RoleGroupBy], { nullable: false })
  groupByRole(@Args() args: RoleGroupByArgs) {
    return this.roleService.groupBy(args);
  }

  @Query(() => AggregateRole, { nullable: false })
  aggregateRole(@Args() args: RoleAggregateArgs) {
    return this.roleService.aggregate(args);
  }

  @Mutation(() => Role, { nullable: true })
  createRole(@Args() args: CreateOneRoleArgs) {
    return this.roleService.create(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  createManyRole(@Args() args: CreateManyRoleArgs) {
    return this.roleService.createMany(args);
  }

  @Mutation(() => Role, { nullable: true })
  updateRole(@Args() args: UpdateOneRoleArgs) {
    return this.roleService.update(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  updateManyRole(@Args() args: UpdateManyRoleArgs) {
    return this.roleService.updateMany(args);
  }

  @Mutation(() => Role, { nullable: true })
  deleteRole(@Args() args: DeleteOneRoleArgs) {
    return this.roleService.delete(args);
  }

  @Mutation(() => AffectedRows, { nullable: true })
  deleteManyRole(@Args() args: DeleteManyRoleArgs) {
    return this.roleService.deleteMany(args);
  }
}
