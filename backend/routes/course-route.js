const express = require('express');
const { check } = require('express-validator');
const courseController = require('../controllers/course-controller');
const checkAuth = require('../middleware/check-auth');


const router = express.Router();

router.get('/:courseCode', courseController.getCourseByCourseCode); //localhost:3000/course/COMP3322 // localhost:3000
router.get('/:courseCode/review', courseController.getReviewByCourseCode);
// router.use(checkAuth);
router.post('/:courseCode/createReview', courseController.createReview);

module.exports = router;
