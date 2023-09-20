/*
  Warnings:

  - Added the required column `advisor` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intake` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Student` ADD COLUMN `advisor` VARCHAR(191) NOT NULL,
    ADD COLUMN `intake` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_advisor_fkey` FOREIGN KEY (`advisor`) REFERENCES `Lecturer`(`regno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Results` ADD CONSTRAINT `Results_regno_fkey` FOREIGN KEY (`regno`) REFERENCES `Student`(`regno`) ON DELETE RESTRICT ON UPDATE CASCADE;
