/*
  Warnings:

  - Added the required column `createdAt` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "value" DECIMAL(10,2) NOT NULL;
