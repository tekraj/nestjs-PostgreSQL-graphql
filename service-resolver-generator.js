const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const parentFolderPath = './src/modules/graphql-api/prismagraphql';

const folders = fs.readdirSync(parentFolderPath);
const childFolders = folders.filter(
  (file) =>
    file !== 'prisma' &&
    fs.statSync(path.join(parentFolderPath, file)).isDirectory(),
);

function capitalizeWords(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
function firstLetterToLowerCase(inputString) {
  if (typeof inputString !== 'string' || inputString.length === 0) {
    return inputString; // Return unchanged if input is not a non-empty string
  }

  return inputString.charAt(0).toLowerCase() + inputString.slice(1);
}
for (let folder of childFolders){
  const serviceName = capitalizeWords(folder);
  console.log(`${serviceName}Service,`);

}
console.log('=========Resolvers=====')
for (let folder of childFolders){
  const serviceName = capitalizeWords(folder);
  console.log(`${serviceName}Resolver,`);

}
// Generate services

// for (let folder of childFolders){
//    const serviceName = capitalizeWords(folder);
//    const typescriptCode = `import { Injectable } from "@nestjs/common";
//    import { PrismaService } from "../../prisma.service";
//    import { BaseCrudService } from "./base.service";
//    import { ${serviceName}, Prisma } from "@prisma/client";
//    @Injectable()
//    export class ${serviceName}Service extends BaseCrudService<
//      ${serviceName},
//      Prisma.${serviceName}FindFirstArgs,
//      Prisma.${serviceName}FindUniqueArgs,
//      Prisma.${serviceName}FindManyArgs,
//      Prisma.${serviceName}GroupByArgs,
//      Prisma.${serviceName}AggregateArgs,
//      Prisma.${serviceName}CreateArgs,
//      Prisma.${serviceName}CreateManyArgs,
//      Prisma.${serviceName}UpdateArgs,
//      Prisma.${serviceName}UpdateManyArgs,
//      Prisma.${serviceName}DeleteArgs,
//      Prisma.${serviceName}DeleteManyArgs
//    > {
//      constructor(prisma: PrismaService) {
//        super(prisma);
//      }
//    }
//    `;
//    const formattedCode = prettier.format(typescriptCode, {
//     parser: 'typescript',
//   });
//    fs.writeFileSync(`./src/shared/services/${folder}.service.ts`,formattedCode   );

// }


  // Generate Resolvers
  for (let folder of childFolders){
       const serviceName = capitalizeWords(folder);
       const service = firstLetterToLowerCase(serviceName);
       const typescriptCode = `import { ${serviceName}Service } from "src/shared/services/${folder}.service";
       import {
         ${serviceName},
         FindFirst${serviceName}Args,
         FindUnique${serviceName}Args,
         FindMany${serviceName}Args,
         ${serviceName}GroupBy,
         ${serviceName}GroupByArgs,
         Aggregate${serviceName},
         ${serviceName}AggregateArgs,
         CreateOne${serviceName}Args,
         CreateMany${serviceName}Args,
         UpdateOne${serviceName}Args,
         UpdateMany${serviceName}Args,
         DeleteOne${serviceName}Args,
         DeleteMany${serviceName}Args,
       } from "../prismagraphql/${folder}";
       import { AffectedRows } from "../prismagraphql/prisma";
       import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
       import { GqlJWTGuard } from "src/shared/guards/gql-jwt/gql-jwt.guard";
       import { RolesGuard } from "src/shared/guards/roles/roles.guard";
       import { UseGuards } from "@nestjs/common";
       @UseGuards(GqlJWTGuard, RolesGuard)
       @Resolver(() => ${serviceName})
       export class ${serviceName}Resolver {
         constructor(private readonly ${service}Service: ${serviceName}Service) {}
       
         @Query(() => ${serviceName}, { nullable: false })
         findFirst${serviceName}(@Args() args: FindFirst${serviceName}Args) {
           this.${service}Service.findFirst(args);
         }
       
         @Query(() => ${serviceName}, { nullable: false })
         findUnique${serviceName}(@Args() args: FindUnique${serviceName}Args) {
           return this.${service}Service.findUnique(args);
         }
       
         @Query(() => [${serviceName}], { nullable: false })
         list${serviceName}s(@Args() args: FindMany${serviceName}Args) {
           return this.${service}Service.findMany(args);
         }
       
         @Query(() => [${serviceName}GroupBy], { nullable: false })
         groupBy${serviceName}(@Args() args: ${serviceName}GroupByArgs) {
           return this.${service}Service.groupBy(args);
         }
       
         @Query(() => Aggregate${serviceName}, { nullable: false })
         aggregate${serviceName}(@Args() args: ${serviceName}AggregateArgs) {
           return this.${service}Service.aggregate(args);
         }
       
         @Mutation(() => ${serviceName}, { nullable: true })
         create${serviceName}(@Args() args: CreateOne${serviceName}Args) {
           return this.${service}Service.create(args);
         }
       
         @Mutation(() => AffectedRows, { nullable: true })
         createMany${serviceName}(@Args() args: CreateMany${serviceName}Args) {
           return this.${service}Service.createMany(args);
         }
       
         @Mutation(() => ${serviceName}, { nullable: true })
         update${serviceName}(@Args() args: UpdateOne${serviceName}Args) {
           return this.${service}Service.update(args);
         }
       
         @Mutation(() => AffectedRows, { nullable: true })
         updateMany${serviceName}(@Args() args: UpdateMany${serviceName}Args) {
           return this.${service}Service.updateMany(args);
         }
       
         @Mutation(() => ${serviceName}, { nullable: true })
         delete${serviceName}(@Args() args: DeleteOne${serviceName}Args) {
           return this.${service}Service.delete(args);
         }
       
         @Mutation(() => AffectedRows, { nullable: true })
         deleteMany${serviceName}(@Args() args: DeleteMany${serviceName}Args) {
           return this.${service}Service.deleteMany(args);
         }
       }
      `;
       const formattedCode = prettier.format(typescriptCode, {
        parser: 'typescript',
      });
       fs.writeFileSync(`./src/modules/graphql-api/resolvers/${folder}.resolver.ts`,formattedCode   );
    
}

