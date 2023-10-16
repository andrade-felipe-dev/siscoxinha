-- AlterTable
ALTER TABLE `item_compra` ADD COLUMN `compra_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `compra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `estado_compra` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `item_compra` ADD CONSTRAINT `item_compra_compra_id_fkey` FOREIGN KEY (`compra_id`) REFERENCES `compra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
