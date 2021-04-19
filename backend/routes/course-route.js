const express = require('express');
const { check } = require('express-validator');
const courseController = require('../controllers/course-controller');
const checkAuth = require('../middleware/check-auth');


const router = express.Router();

router.get('/:courseCode', courseController.getCourseByCourseCode);
router.use(checkAuth);
router.post('/:courseCode/addReview', courseController.createReview);

module.exports = router;
