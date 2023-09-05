import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { BaseCrudService } from "./base.service";
import { Article, Prisma } from "@prisma/client";
import slugify from 'slugify';
@Injectable()
export class ArticleService extends BaseCrudService<
  Article,
  Prisma.ArticleFindFirstArgs,
  Prisma.ArticleFindUniqueArgs,
  Prisma.ArticleFindManyArgs,
  Prisma.ArticleGroupByArgs,
  Prisma.ArticleAggregateArgs,
  Prisma.ArticleCreateArgs,
  Prisma.ArticleCreateManyArgs,
  Prisma.ArticleUpdateArgs,
  Prisma.ArticleUpdateManyArgs,
  Prisma.ArticleDeleteArgs,
  Prisma.ArticleDeleteManyArgs
> {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  async create(args: Prisma.ArticleCreateArgs): Promise<Article> {
    args.data.url = await this.generateUniqueUrl(args.data.url);
    return this.prisma[this.modelName].create(args);
  }

  async createMany(args: Prisma.ArticleCreateManyArgs) {
    if (Array.isArray(args.data)) {
      await Promise.all(
        args.data.map(async (article) => {
          article.url = await this.generateUniqueUrl(article.url);
        })
      );
    } else {
      args.data.url = await this.generateUniqueUrl(args.data.url);
    }
    return this.prisma[this.modelName].createMany(args);
  }

  async update(args: Prisma.ArticleUpdateArgs): Promise<Article> {
    if (args.data.url) {
      args.data.url = await this.generateUniqueUrl(args.data.url);
    }
    return this.prisma[this.modelName].update(args);
  }

  async updateMany(args: Prisma.ArticleUpdateManyArgs): Promise<Article[]> {
    if (Array.isArray(args.data)) {
      await Promise.all(
        args.data.map(async (article) => {
          if (article.url) {
            article.url = await this.generateUniqueUrl(article.url);
          }
        })
      );
    } else {
      if (args.data.url) {
        args.data.url = await this.generateUniqueUrl(args.data.url);
      }
    }
    return this.prisma[this.modelName].updateMany(args);
  }

  private async generateUniqueUrl(title) {
    let baseURL = slugify(title);
    let url = baseURL;
    let counter = 2;

    while (true) {
      const existingArticle = await this.prisma.article.findUnique({
        where: { url },
      });
      if (!existingArticle) {
        return url;
      }
      url = `${baseURL}-${counter}`;
      counter++;
    }
  }
}
