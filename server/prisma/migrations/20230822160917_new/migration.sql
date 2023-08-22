/*
  Warnings:

  - You are about to drop the column `gpa` on the `Results` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Results" DROP COLUMN "gpa";

-- CreateTable
CREATE TABLE "Gpa" (
    "id" SERIAL NOT NULL,
    "regno" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "gpa" TEXT NOT NULL,

    CONSTRAINT "Gpa_pkey" PRIMARY KEY ("id")
);
