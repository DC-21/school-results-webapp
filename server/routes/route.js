const express = require('express');
const router = express.Router();
const { Student } = require('../controller/controller');

router.post('/student', Student);

module.exports = router;