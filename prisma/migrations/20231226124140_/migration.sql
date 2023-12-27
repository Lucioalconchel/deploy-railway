/*
  Warnings:

  - The primary key for the `producto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `producto` table. All the data in the column will be lost.
  - The primary key for the `usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `id_producto` to the `producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `producto` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_producto` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_producto`);

-- AlterTable
ALTER TABLE `usuario` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_usuario`);
