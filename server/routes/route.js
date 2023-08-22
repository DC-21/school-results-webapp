const express = require('express');
const router = express.Router();
const { Student, getResults, Lecturer, createResults } = require('../controller/controller');

router.post('/student', Student);
router.get('/results/:regno',getResults);

router.post('/lecturer', Lecturer);

router.post('/results',createResults);

module.exports = router;