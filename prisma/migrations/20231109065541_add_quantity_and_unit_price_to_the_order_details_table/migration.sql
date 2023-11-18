/*
  Warnings:

  - Added the required column `quantity` to the `OrderDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `OrderDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `OrderDetails` ADD COLUMN `quantity` INTEGER NOT NULL,
    ADD COLUMN `unitPrice` INTEGER NOT NULL;
