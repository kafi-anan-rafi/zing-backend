/*
  Warnings:

  - Added the required column `password` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Seller` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `password` VARCHAR(15) NOT NULL;

-- AlterTable
ALTER TABLE `Seller` ADD COLUMN `password` VARCHAR(15) NOT NULL;
