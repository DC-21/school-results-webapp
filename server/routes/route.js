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
} = require("../controller/controller");

router.post("/student", Student);
router.get("/student", getStudents);
router.put("/student/:regno", updateStudent);

router.get("/results/:regno", getResults);
router.post("/results", createResults);
router.put("/results/:regno", updateResults);

router.post("/lecturer", Lecturer);
router.get("/lecturer", getLecturers);
router.put("/lecturer/:regno", updateLecturer);

router.post("/gpa", createGPA);
router.delete("/gpa/:id",deleteGPA);

module.exports = router;
