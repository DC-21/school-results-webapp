-- AddForeignKey
ALTER TABLE `Gpa` ADD CONSTRAINT `Gpa_regno_fkey` FOREIGN KEY (`regno`) REFERENCES `Student`(`regno`) ON DELETE RESTRICT ON UPDATE CASCADE;
