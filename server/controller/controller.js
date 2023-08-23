const { PrismaClient } = require("@prisma/client");
const prisma = require("../util/db");

async function Student(req, res) {
  try {
    const newStudent = await prisma.student.create({
      data: {
        course:req.body.course,
        regno: req.body.regno,
        name: req.body.name,
        password: req.body.password,
      },
    });
    res.json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
}

async function getStudents(req, res) {
  const regno = req.body.regno;
  try {
    const students = await prisma.student.findMany({
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

async function updateStudent(req, res) {
  const regno = req.params.regno;
  const { course,name, password } = req.body;

  try {
    const updatedStudent = await prisma.student.update({
      where: {
        regno: regno,
      },
      data: {
        course:course,
        name: name,
        password: password,
      },
    });

    res.json(updatedStudent);
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

async function getLecturers(req, res) {
  const regno = req.body.regno;
  try {
    const lecturers = await prisma.lecturer.findMany({
      where: {
        regno: regno,
      },
    });

    if (students.length > 0) {
      res.json(lecturers);
    } else {
      res.status(404).json({
        error: "No lecturers found for the provided registration number",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateLecturer(req, res) {
  const regno = req.params.regno;
  const { name, password } = req.body;

  try {
    const updatedLecturer = await prisma.lecturer.update({
      where: {
        regno: regno,
      },
      data: {
        name: name,
        password: password,
      },
    });

    res.json(updatedLecturer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
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

async function updateResults(req, res) {
  const regno = req.params.regno; // Assuming you're passing the regno as a route parameter
  const { semester, code, name, mark } = req.body;

  try {
    const updatedResults = await prisma.results.update({
      where: {
        regno: regno,
      },
      data: {
        semester: semester,
        code: code,
        name: name,
        mark: mark,
      },
    });

    res.json(updatedResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  Student,
  updateStudent,
  getResults,
  Lecturer,
  getLecturers,
  updateLecturer,
  createResults,
  updateResults,
  getStudents,
};
