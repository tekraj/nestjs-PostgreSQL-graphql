import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { BaseCrudService } from "./base.service";
import { Permission, Prisma } from "@prisma/client";
@Injectable()
export class PermissionService extends BaseCrudService<
  Permission,
  Prisma.PermissionFindFirstArgs,
  Prisma.PermissionFindUniqueArgs,
  Prisma.PermissionFindManyArgs,
  Prisma.PermissionGroupByArgs,
  Prisma.PermissionAggregateArgs,
  Prisma.PermissionCreateArgs,
  Prisma.PermissionCreateManyArgs,
  Prisma.PermissionUpdateArgs,
  Prisma.PermissionUpdateManyArgs,
  Prisma.PermissionDeleteArgs,
  Prisma.PermissionDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
