import { PrismaClient, RoleTypes } from "@prisma/client";
const prisma = new PrismaClient();
export const roleSeeder = async () => {
  await prisma.role.upsert({
    where: { name: "admin" },
    update: {
      name: "admin",
      roleType: RoleTypes.ADMIN,
    },
    create: {
      name: "admin",
      roleType: RoleTypes.ADMIN,
    },
  });
  await prisma.role.upsert({
    where: { name: "super-admin" },
    update: {
      name: "super-admin",
      roleType: RoleTypes.SUPER_ADMIN,
    },
    create: {
      name: "super-admin",
      roleType: RoleTypes.SUPER_ADMIN,
    },
  });
};
