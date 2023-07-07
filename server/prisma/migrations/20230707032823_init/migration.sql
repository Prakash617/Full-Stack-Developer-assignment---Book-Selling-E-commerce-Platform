-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "ISBN" BIGINT NOT NULL DEFAULT 0,
ADD COLUMN     "availability" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image" TEXT NOT NULL DEFAULT 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg';
