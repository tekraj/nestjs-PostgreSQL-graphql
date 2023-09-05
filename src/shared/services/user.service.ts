import { LoginArgs } from './../../modules/graphql-api/custom-data/args/login.args';
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma.service";
import { BaseCrudService } from "./base.service";
import { User, Prisma } from "@prisma/client";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends BaseCrudService<
  User,
  Prisma.UserFindFirstArgs,
  Prisma.UserFindUniqueArgs,
  Prisma.UserFindManyArgs,
  Prisma.UserGroupByArgs,
  Prisma.UserAggregateArgs,
  Prisma.UserCreateArgs,
  Prisma.UserCreateManyArgs,
  Prisma.UserUpdateArgs,
  Prisma.UserUpdateManyArgs,
  Prisma.UserDeleteArgs,
  Prisma.UserDeleteManyArgs
> {
  private saltRounds = 10;
  constructor(prisma: PrismaService,readonly jwtService: JwtService) {
    super(prisma);
  }
  async  login(args:LoginArgs){
    const user = await this.prisma.user.findFirst({where:{email:args.email}});
    if(user){
      if(await bcrypt.compare(args.password, user.password)){
        const payload = { sub: user.id, email: user.email,name: user.name };
        return {
          status: true,
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    }
    return {status:false,error:'Invalid Email or Password'};
  }
  async create(args: Prisma.UserCreateArgs): Promise<User> {
    args.data.password = await bcrypt.hash(args.data.password, this.saltRounds);
    return this.prisma.user.create(args);
  }

  async createMany(args: Prisma.UserCreateManyArgs) {
    if(Array.isArray(args.data)){
      for(let i=0;i<args.data.length;i++){
        args.data[i].password =  await bcrypt.hash( args.data[i].password, this.saltRounds);
      }
    }
    
    return this.prisma.user.createMany(args);
  }

  async update(args: Prisma.UserUpdateArgs): Promise<User> {
    return this.prisma.user.update(args);
  }

  async updateMany(args: Prisma.UserUpdateManyArgs): Promise<any> {
    if(Array.isArray(args.data)){
      for(let i=0;i<args.data.length; i++){
        if(args.data[i].password){
          args.data[i].password =  await bcrypt.hash( args.data[i].password, this.saltRounds);
        }
      }
    }
    return this.prisma.user.updateMany(args);
  }
}
