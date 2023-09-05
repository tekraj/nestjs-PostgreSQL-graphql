/*
  Warnings:

  - A unique constraint covering the columns `[modelName]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Permission_modelName_key" ON "Permission"("modelName");
