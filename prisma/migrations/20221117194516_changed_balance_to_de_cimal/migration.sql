/*
  Warnings:

  - Changed the type of `balance` on the `Accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Accounts" DROP COLUMN "balance",
ADD COLUMN     "balance" DECIMAL(10,2) NOT NULL;
