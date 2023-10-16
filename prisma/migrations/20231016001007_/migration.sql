-- DropForeignKey
ALTER TABLE `item_compra` DROP FOREIGN KEY `item_compra_compra_id_fkey`;

-- AlterTable
ALTER TABLE `item_compra` MODIFY `compra_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `item_compra` ADD CONSTRAINT `item_compra_compra_id_fkey` FOREIGN KEY (`compra_id`) REFERENCES `compra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
