const { PrismaClient } = require("@prisma/client");
const prisma = require("../util/db");

async function Student(req, res) {
  try {
    const newStudent = await prisma.student.create({
      data: {
        regno: req.body.regno,
        name: req.body.name,
        password: req.body.password,
      },
    });
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
}

async function getStudents(req, res) {
    const regno = req.body.regno; // Use req.body.regno to access registration number from request body
    try {
      const students = await prisma.student.findMany({ // Use prisma.student.findMany instead of prisma.students.findMany
        where: {
          regno: regno,
        },
      });
  
      if (students.length > 0) {
        res.json(students);
      } else {
        res.status(404).json({
          error: "No students found for the provided registration number",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  

async function Lecturer(req, res) {
  try {
    const newLecturer = await prisma.lecturer.create({
      data: {
        regno: req.body.regno,
        name: req.body.name,
        password: req.body.password,
      },
    });
    res.json(newLecturer);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
}

async function createResults(req, res) {
  try {
    const newResult = await prisma.results.create({
      data: {
        regno: req.body.regno,
        semester: req.body.semester,
        code: req.body.code,
        name: req.body.name,
        mark: req.body.mark,
      },
    });
    res.json(newResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error" });
  }
}

async function getResults(req, res) {
  const regno = req.params.regno;
  const semester = req.body.semester;
  try {
    const results = await prisma.results.findMany({
      where: {
        regno: regno,
        semester: semester,
      },
    });

    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(404).json({
        error: "No results found for the provided registration number",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { Student, getResults, Lecturer, createResults, getStudents };
