const express = require("express");
const { check } = require("express-validator");
const checkAuth = require('../middleware/check-auth');
const userController = require("../controllers/user-controller");

const router = express.Router();


router.post(
	"/signup",
	[
		check("uid").not().isEmpty(),
		check("userName").not().isEmpty(),
		check("email").normalizeEmail().isEmail(),
		check("password").isLength({ min: 6 }),
	],
	userController.signup
);

router.post('/login', userController.login);
router.use(checkAuth);
router.post('/:courseCode/addToTimetable', userController.addCourse);

module.exports = router;
