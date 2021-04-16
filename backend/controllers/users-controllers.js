const uuid = require("uuid").v4;
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
	{
		id: "u1",
		name: "Cayden",
		email: "test@h.k",
		password: "123456",
	},
];

const getUsers = (req, res, next) => {
	res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		throw new HttpError("Invalid input passed", 422);
	}

	const { name, email, password } = req.body;

	const hasUser = DUMMY_USERS.find((u) => u.email === email);

	if (hasUser) {
		throw new HttpError("Could not create user, email already exists", 422);
	}

	const createdUser = {
		id: uuid(),
		name, // equal to name: name
		email, // equal to email: email
		password, // equal to password: password
	};

	DUMMY_USERS.push(createdUser);
	res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
	const { email, password } = req.body;

	const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
	if (!identifiedUser || identifiedUser.password !== password) {
		throw new HttpError("Could not identify user", 401);
	}
	res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
