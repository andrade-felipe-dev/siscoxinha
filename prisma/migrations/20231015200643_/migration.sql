/*
  Warnings:

  - Made the column `produto_id` on table `item_compra` required. This step will fail if there are existing NULL values in that column.
  - Made the column `compra_id` on table `item_compra` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `item_compra` DROP FOREIGN KEY `item_compra_compra_id_fkey`;

-- DropForeignKey
ALTER TABLE `item_compra` DROP FOREIGN KEY `item_compra_produto_id_fkey`;

-- AlterTable
ALTER TABLE `item_compra` MODIFY `produto_id` INTEGER NOT NULL,
    MODIFY `compra_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `item_compra` ADD CONSTRAINT `item_compra_produto_id_fkey` FOREIGN KEY (`produto_id`) REFERENCES `produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item_compra` ADD CONSTRAINT `item_compra_compra_id_fkey` FOREIGN KEY (`compra_id`) REFERENCES `compra`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
