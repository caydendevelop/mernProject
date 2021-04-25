const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");
const Course = require("../models/course");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const addCourse = (req, res, next) => {
	const courseCode = req.params.courseCode;

	let user, course;
	try {
		user = await User.findById(req.body.userId).populate('courseAdded');
		course = await Course.findOne({ courseCode: courseCode }).exec();
	} catch (err) {
		const error = new HttpError(
			"Something went wrong, could not find a user.",
			500
		);
		return next(error);
	}

	if (!user) {
		const error = new HttpError(
			"Could not find user for the provided user id.",
			404
		);
		return next(error);
	}

	if (!course) {
		const error = new HttpError(
			"Could not find course for the provided course code.",
			404
		);
		return next(error);
	}

	let courseId = course.id;

	for (i of user.courseAdded) {
		// check whether the user has added the same course before
		if (i == courseId) {
			const error = new HttpError(
				"Could not add the same course more than once.",
				500
			);
			return next(error);
		}
	};

	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();

		user.addedCourse.push(course);
		await user.save({ session: sess });

		await sess.commitTransaction();
	} catch (err) {
		console.log(err);
		const error = new HttpError(
			"Adding course to user failed.",
			500
		);
		return next(error);
	}
	res.status(201).json({ message: "success add course to user" });
};

const signup = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(
			new HttpError("Invalid inputs passed, please check your data.", 422)
		);
	}
	const { uid, userName, email, password } = req.body;

	let existingUser;
	try {
		existingUser = await User.findOne({ email: email });
	} catch (err) {
		const error = new HttpError("email has already been registered.", 500);
		return next(error);
	}

	if (existingUser) {
		const error = new HttpError(
			"User exists already, please login instead.",
			422
		);
		return next(error);
	}

	let hashedPassword;
	try {
		hashedPassword = await bcrypt.hash(password, 12);
	} catch (err) {
		const error = new HttpError("hash password failed", 500);
	}

	const createdUser = new User({
		uid,
		userName,
		email,
		password: hashedPassword,
		review: [],
	});

	try {
		await createdUser.save();
	} catch (err) {
		console.log(err);
		const error = new HttpError(
			"Signing up failed, please try again later.",
			500
		);
		return next(error);
	}

	let token;
	try {
		token = jwt.sign(
			{ userId: createdUser.id, email: createdUser.email },
			"supersecret_dont_share",
			{ expiresIn: "1h" }
		);
	} catch (err) {
		const error = new HttpError(
			"Signing up token failed, please try again later.",
			500
		);
		return next(error);
	}

	res
		.status(201)
		.json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const login = async (req, res, next) => {
	const { email, password } = req.body;

	let existingUser;

	try {
		existingUser = await User.findOne({ email: email });
	} catch (err) {
		const error = new HttpError("Loggin in failed.", 500);
		return next(error);
	}

	if (!existingUser) {
		const error = new HttpError("User does not exist.", 401);
		return next(error);
	}

	let isValidPassword = false;
	try {
		isValidPassword = await bcrypt.compare(password, existingUser.password);
	} catch (err) {
		const error = new HttpError("Invalid credentials.", 500);
		return next(error);
	}

	if (!isValidPassword) {
		const error = new HttpError("Invalid password.", 401);
		return next(error);
	}

  let token;
	try {
		token = jwt.sign(
			{ userId: existingUser.id, email: existingUser.email },
			"supersecret_dont_share",
			{ expiresIn: "1h" }
		);
	} catch (err) {
		const error = new HttpError(
			"Logging in token failed, please try again later.",
			500
		);
		return next(error);
	}

	res.json({ // append to response.data{}
		message: "Logged in",
		userId: existingUser.id,
    email: existingUser.email,
    token: token
	});
};

exports.addCourse = addCourse;
exports.signup = signup;
exports.login = login;
