const express = require('express');
const router = express.Router();
const { Student, getResults, Lecturer, getLecturers, createResults, getStudents, updateLecturer } = require('../controller/controller');

router.post('/student', Student);
router.get('/student', getStudents);

router.get('/results/:regno',getResults);

router.post('/lecturer', Lecturer);
router.get('/lecturer',getLecturers);
router.put('/lecturer/:regno',updateLecturer);

router.post('/results',createResults);

module.exports = router;