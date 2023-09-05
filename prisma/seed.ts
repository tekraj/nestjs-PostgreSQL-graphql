import { PrismaClient } from "@prisma/client";
import { roleSeeder } from "./seeds/roleSeeder";
import { permissionSeeder } from "./seeds/permissionSeeder";
const prisma = new PrismaClient();
async function seed() {
  await Promise.resolve([roleSeeder(),permissionSeeder()]);
}
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
