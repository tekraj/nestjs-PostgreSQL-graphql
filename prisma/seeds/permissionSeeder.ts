import { Operation, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const permissionSeeder = async () => {
  const result: { table_name: string }[] = await prisma.$queryRaw`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_type = 'BASE TABLE' 
    AND table_name NOT LIKE '%pg%'
    AND table_name NOT LIKE '%sql%'
    AND table_name NOT LIKE '%_prisma%';
  `;

  await Promise.all(
    result.map(async(row) => {
      await prisma.permission.upsert({
        where: { modelName: row.table_name },
        update: {
          modelName: row.table_name,
          rolePermissionsId: 1,
          allowedOperations: [
            Operation.create,
            Operation.get,
            Operation.list,
            Operation.update,
            Operation.delete,
          ],
        },
        create: {
          modelName: row.table_name,
          rolePermissionsId: 1,
          allowedOperations: [
            Operation.create,
            Operation.get,
            Operation.list,
            Operation.update,
            Operation.delete,
          ],
        },
      });
    })
  );
};
