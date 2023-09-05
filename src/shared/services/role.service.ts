import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { BaseCrudService } from "./base.service";
import { Role, Prisma } from "@prisma/client";
@Injectable()
export class RoleService extends BaseCrudService<
  Role,
  Prisma.RoleFindFirstArgs,
  Prisma.RoleFindUniqueArgs,
  Prisma.RoleFindManyArgs,
  Prisma.RoleGroupByArgs,
  Prisma.RoleAggregateArgs,
  Prisma.RoleCreateArgs,
  Prisma.RoleCreateManyArgs,
  Prisma.RoleUpdateArgs,
  Prisma.RoleUpdateManyArgs,
  Prisma.RoleDeleteArgs,
  Prisma.RoleDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
