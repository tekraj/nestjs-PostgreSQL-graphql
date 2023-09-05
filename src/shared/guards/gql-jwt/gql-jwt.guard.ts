import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from 'src/shared/services/user.service';

@Injectable()
export class GqlJWTGuard extends AuthGuard('jwt') {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {
    super();
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      throw new UnauthorizedException('Invalid Token');
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: process.env.JWT_SECRET
        }
      );
      const userData  = await this.userService.findFirst({
        where: { id: { equals: payload.sub ?? '' } },
        include: { role: { include: { permissions: true } } },
      });
      req.user = userData;
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
