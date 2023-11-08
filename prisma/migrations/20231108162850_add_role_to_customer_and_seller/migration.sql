-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `role` ENUM('customer', 'seller', 'admin') NOT NULL DEFAULT 'customer';

-- AlterTable
ALTER TABLE `Seller` ADD COLUMN `role` ENUM('customer', 'seller', 'admin') NOT NULL DEFAULT 'seller';
