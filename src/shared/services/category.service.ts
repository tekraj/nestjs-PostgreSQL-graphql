import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { BaseCrudService } from "./base.service";
import { Category, Prisma } from "@prisma/client";
@Injectable()
export class CategoryService extends BaseCrudService<
  Category,
  Prisma.CategoryFindFirstArgs,
  Prisma.CategoryFindUniqueArgs,
  Prisma.CategoryFindManyArgs,
  Prisma.CategoryGroupByArgs,
  Prisma.CategoryAggregateArgs,
  Prisma.CategoryCreateArgs,
  Prisma.CategoryCreateManyArgs,
  Prisma.CategoryUpdateArgs,
  Prisma.CategoryUpdateManyArgs,
  Prisma.CategoryDeleteArgs,
  Prisma.CategoryDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
