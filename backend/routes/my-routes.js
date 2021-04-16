const express = require("express");
const { check } = require('express-validator');
const myController = require("../controllers/my-controller");
const router = express.Router();

// GET Request
router.get("/", myController.getIndexPage);
router.get("/signup", myController.getSignupPage);
router.get("/login", myController.getLoginPage);
router.get("/courselist", myController.getCourseListPage);
router.get("/courselist/:cid", myController.getCourseById);

// POST Request
router.post(
	"/signup",
	[
		check("frontName").not().isEmpty(),
		check("lastName").not().isEmpty(),
		check("userName").not().isEmpty(),
		check("email")
			.normalizeEmail() // Test@test.com => test@test.com
			.isEmail(),
		check("password").isLength({ min: 6 }),
	],
	myController.signup
);
router.post("/login", myController.login);

// router.patch(
//   "/:pid",
//   [
//     check('title').not().isEmpty(),
//     check('description').isLength({ min: 5})
//   ],
//   placesControllers.updatePlaceById
// );

// router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;