import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { BaseCrudService } from "./base.service";
import { ArticleImage, Prisma } from "@prisma/client";
@Injectable()
export class ArticleImageService extends BaseCrudService<
  ArticleImage,
  Prisma.ArticleImageFindFirstArgs,
  Prisma.ArticleImageFindUniqueArgs,
  Prisma.ArticleImageFindManyArgs,
  Prisma.ArticleImageGroupByArgs,
  Prisma.ArticleImageAggregateArgs,
  Prisma.ArticleImageCreateArgs,
  Prisma.ArticleImageCreateManyArgs,
  Prisma.ArticleImageUpdateArgs,
  Prisma.ArticleImageUpdateManyArgs,
  Prisma.ArticleImageDeleteArgs,
  Prisma.ArticleImageDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }
}
