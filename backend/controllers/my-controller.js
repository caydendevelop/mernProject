const uuid = require("uuid").v4; // const uuid = require('uuid/v4'); in Udemy video cannot work!!!!!
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");

let DUMMY_COURSES = [
	{
		id: "COMP3322",
		title: "COMP3322",
		description: "About web technology and required tools to create your own website",
		averageGrade: "A-",
    averageWorkload: "3/5 "
	},
  {
		id: "COMP3230",
		title: "COMP3230",
		description: "The most onj professor and tutors teach useful OS and multithreading knowledge",
		averageGrade: "B-",
    averageWorkload: "5/5 "
	}
];

const DUMMY_USERS = [
	{
		id: "u1",
    frontName: "Cayden",
		lastName: "Ngai",
    userName: "cuteCat_0w0",
		email: "caydenngai@hku.hk",
		password: "123456",
	},
  {
		id: "u2",
    frontName: "Harry",
		lastName: "Cheung",
    userName: "Awesome_Mario",
		email: "harrycheung@hku.hk",
		password: "123456",
	}
];


const getIndexPage = (req, res, next) => {
  res.json({ message: "This is index page" });
}

const getSignupPage = (req, res, next) => {
  res.json({ message: "This is signup page" });
}

const getLoginPage = (req, res, next) => {
  res.json({ message: "This is login page" });
}

const getCourseListPage = (req, res, next) => {
  res.json({ message: "This is courselist page" });
}

const getCourseById = (req, res, next) => {
  const courseId = req.params.cid;
  const course = DUMMY_COURSES.find(c => c.id === courseId);
  if(!course){
    return next(new HttpError("Could not find a course for the provided course id.", 404))
  }
  res.json({ course });
}

const signup = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		throw new HttpError("Invalid input passed", 422);
	}
	const { frontName, lastName, userName, email, password } = req.body;
	const checkEmail = DUMMY_USERS.find(u => u.email === email);
	if (checkEmail) {
		throw new HttpError("Could not create user, email already exists", 422);
	}
  const checkUserName = DUMMY_USERS.find(u => u.userName === userName);
	if (checkUserName) {
		throw new HttpError("Could not create user, username already exists", 422);
	}

	const createdUser = {
		id: uuid(),
		frontName, 
    lastName,
    userName,
		email, 
		password, 
	}

	DUMMY_USERS.push(createdUser);
	res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
	const { email, password } = req.body;

	const identifiedUser = DUMMY_USERS.find(u => u.email === email);
	if (!identifiedUser || identifiedUser.password !== password) {
		throw new HttpError("Could not identify user", 401);
	}
	res.json({ 
    code: 100,
    message: `Login success. Welcome ${identifiedUser.userName}.` });
};


exports.getIndexPage = getIndexPage;
exports.getSignupPage = getSignupPage;
exports.getLoginPage = getLoginPage;
exports.getCourseListPage = getCourseListPage;
exports.getCourseById = getCourseById;
exports.signup = signup;
exports.login = login;