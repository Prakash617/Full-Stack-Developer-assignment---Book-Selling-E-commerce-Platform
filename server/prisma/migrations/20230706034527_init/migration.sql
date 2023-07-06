/*
  Warnings:

  - You are about to drop the column `bookId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_bookId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "bookId",
DROP COLUMN "quantity";

-- CreateTable
CREATE TABLE "OrderQuantity" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderQuantity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderQuantity" ADD CONSTRAINT "OrderQuantity_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderQuantity" ADD CONSTRAINT "OrderQuantity_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
