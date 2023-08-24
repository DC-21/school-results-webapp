const express = require("express");
const router = express.Router();
const {
  Student,
  getResults,
  Lecturer,
  getLecturers,
  createResults,
  getStudents,
  updateLecturer,
  updateStudent,
  updateResults,
  createGPA,
  deleteGPA,
  getGPA,
  updateGPA,
  deleteResults,
  deleteStudent,
  deleteLecturer,
  lecturerLogin,
} = require("../controller/controller");

router.post("/student", Student);
router.get("/student", getStudents);
router.put("/student/:regno", updateStudent);
router.delete("/student/:regno",deleteStudent);

router.get("/results/:regno", getResults);
router.post("/results", createResults);
router.put("/results/:id", updateResults);
router.delete("/results/:id", deleteResults);

router.post("/lecturer", Lecturer);
router.get("/lecturer", getLecturers);
router.put("/lecturer/:regno", updateLecturer);
router.delete("/lecturer/:regno",deleteLecturer);
router.post("/lecturer-login", lecturerLogin);

router.post("/gpa", createGPA);
router.delete("/gpa/:id",deleteGPA);
router.get("/gpa/:regno",getGPA);
router.put("/gpa/:id",updateGPA);

module.exports = router;
