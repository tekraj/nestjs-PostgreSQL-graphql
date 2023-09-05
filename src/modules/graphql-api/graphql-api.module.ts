import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { ArticleResolver } from './resolvers/article.resolver';
import { CategoryResolver } from './resolvers/category.resolver';
import { CommentResolver } from './resolvers/comment.resolver';
import { LikeResolver } from './resolvers/like.resolver';
import { PermissionResolver } from './resolvers/permission.resolver';
import { RoleResolver } from './resolvers/role.resolver';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from 'src/shared/shared.module';
import { AuthResolver } from './resolvers/auth.resolver';
@Module({
  imports:[
    SharedModule,
  ],
  providers: [
    UserResolver,
    ArticleResolver,
    CategoryResolver,
    CommentResolver,
    LikeResolver,
    PermissionResolver,
    RoleResolver,
    AuthResolver
  ],
  exports:[
  ]
})
export class GraphqlApiModule {}
