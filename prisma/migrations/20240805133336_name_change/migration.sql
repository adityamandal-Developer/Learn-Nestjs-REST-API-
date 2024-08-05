/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Employee_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
