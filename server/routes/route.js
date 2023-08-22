const express = require('express');
const router = express.Router();
const { Student, getStudent, Lecturer, Results } = require('../controller/controller');

router.post('/student', Student);
router.get('/student/:regno',getStudent);

router.post('/lecturer', Lecturer);

router.post('/results',Results);

module.exports = router;