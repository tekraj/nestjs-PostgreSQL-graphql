import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { BaseCrudService } from "./base.service";
import { Comment, Prisma } from "@prisma/client";
@Injectable()
export class CommentService extends BaseCrudService<
  Comment,
  Prisma.CommentFindFirstArgs,
  Prisma.CommentFindUniqueArgs,
  Prisma.CommentFindManyArgs,
  Prisma.CommentGroupByArgs,
  Prisma.CommentAggregateArgs,
  Prisma.CommentCreateArgs,
  Prisma.CommentCreateManyArgs,
  Prisma.CommentUpdateArgs,
  Prisma.CommentUpdateManyArgs,
  Prisma.CommentDeleteArgs,
  Prisma.CommentDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
