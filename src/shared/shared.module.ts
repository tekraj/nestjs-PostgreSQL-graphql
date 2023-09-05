import { Module } from "@nestjs/common";
import { LikeService } from "./services/like.service";
import { PrismaService } from "src/prisma.service";
import { ArticleService } from "./services/article.service";
import { CategoryService } from "./services/category.service";
import { CommentService } from "./services/comment.service";
import { PermissionService } from "./services/permission.service";
import { RoleService } from "./services/role.service";
import { UserService } from "./services/user.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '2days' },
    }),
  ],
  providers: [
    PrismaService,
    UserService,
    ArticleService,
    CategoryService,
    CommentService,
    LikeService,
    PermissionService,
    RoleService,
  ],
  exports: [
    PrismaService,
    UserService,
    ArticleService,
    CategoryService,
    CommentService,
    LikeService,
    PermissionService,
    RoleService,
  ],
})
export class SharedModule {}
