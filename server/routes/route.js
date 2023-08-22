const express = require('express');
const router = express.Router();
const { Student, getStudent, Lecturer } = require('../controller/controller');

router.post('/student', Student);
router.get('/student/:regno',getStudent);

router.post('/lecturer', Lecturer);
module.exports = router;