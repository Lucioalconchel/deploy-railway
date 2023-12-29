/*
  Warnings:

  - A unique constraint covering the columns `[categoria]` on the table `categoria` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `comentario` (
    `id_comentario` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_comentario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `publicacion` (
    `id_publicacion` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `id_comentario` INTEGER NOT NULL,

    PRIMARY KEY (`id_publicacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra` (
    `id_item` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_orden` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `id_producto` INTEGER NOT NULL,
    `stock` INTEGER NOT NULL,
    `precio` DOUBLE NOT NULL,

    PRIMARY KEY (`id_item`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orden` (
    `id_orden` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `numero_orden` INTEGER NOT NULL,
    `precio_final` DOUBLE NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_orden`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `categoria_categoria_key` ON `categoria`(`categoria`);

-- AddForeignKey
ALTER TABLE `comentario` ADD CONSTRAINT `comentario_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `publicacion` ADD CONSTRAINT `publicacion_id_comentario_fkey` FOREIGN KEY (`id_comentario`) REFERENCES `comentario`(`id_comentario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_id_producto_fkey` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `orden_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
