/*
  Warnings:

  - Added the required column `course` to the `Gpa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `Lecturer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course` to the `Results` table without a default value. This is not possible if the table is not empty.
  - Added the required column `course` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Gpa` ADD COLUMN `course` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Lecturer` ADD COLUMN `department` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Results` ADD COLUMN `course` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Student` ADD COLUMN `course` VARCHAR(191) NOT NULL;
