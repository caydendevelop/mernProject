const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const Course = require("../models/course");
const Review = require("../models/review");
const User = require("../models/user");
const mongoose = require("mongoose");

const getCourseByCourseCode = async (req, res, next) => {
	const courseCode2 = req.params.courseCode;

	let course;
	try {
		course = await Course.findOne({ courseCode: courseCode2 }).exec();
	} catch (err) {
		const error = new HttpError(
			"Something went wrong, could not find a course.",
			500
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

	res.json({ course: course.toObject({ getters: true }) });
};

const createReview = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return next(
			new HttpError("Invalid inputs passed, please check your data.", 422)
		);
	}
	const { grade, workload, comment ,creator} = req.body;
	// const creator = req.userData.userId;
	const courseCode = req.params.courseCode;
	const createdReview = new Review({
		grade,
		workload,
		comment,
		courseCode,
		creator,
	});

	let course, user;
	try {
		course = await Course.findOne({ courseCode: courseCode }).populate('review').exec();
		user = await User.findById(creator).populate('review');
	} catch (err) {
		const error = new HttpError(
			"Creating review step 1 failed, please try again.",
			500
		);
		return next(error);
	}
	if (!course) {
		const error = new HttpError(
			"Could not find course for provided course code.",
			404
		);
		return next(error);
	}
	if (!user) {
		const error = new HttpError(
			"Could not find user for provided userid.",
			404
		);
		return next(error);
	}

  for (i of course.review){ // check whether the user has created review for this course before
    if (i.creator == creator) {
      const error = new HttpError(
        "Could not create more than 1 review by single user.",
        500
      );
      return next(error);
    }
  }

	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
		await createdReview.save({ session: sess });

		course.review.push(createdReview);
		await course.save({ session: sess });

		user.review.push(createdReview);
		await user.save({ session: sess });

		await sess.commitTransaction();
	} catch (err) {
		console.log(err);
		const error = new HttpError(
			"Creating review step 2 failed, please try again.",
			500
		);
		return next(error);
	}
	res.status(201).json({ review: createdReview });
};

exports.getCourseByCourseCode = getCourseByCourseCode;
exports.createReview = createReview;
