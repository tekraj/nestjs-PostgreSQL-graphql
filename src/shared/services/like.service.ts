import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { BaseCrudService } from "./base.service";
import { Like, Prisma } from "@prisma/client";
@Injectable()
export class LikeService extends BaseCrudService<
  Like,
  Prisma.LikeFindFirstArgs,
  Prisma.LikeFindUniqueArgs,
  Prisma.LikeFindManyArgs,
  Prisma.LikeGroupByArgs,
  Prisma.LikeAggregateArgs,
  Prisma.LikeCreateArgs,
  Prisma.LikeCreateManyArgs,
  Prisma.LikeUpdateArgs,
  Prisma.LikeUpdateManyArgs,
  Prisma.LikeDeleteArgs,
  Prisma.LikeDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
