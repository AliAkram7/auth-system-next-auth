-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER';
