/*
  Warnings:

  - You are about to alter the column `ISBN` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "ISBN" SET DATA TYPE INTEGER;
