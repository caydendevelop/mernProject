const uuid = require("uuid").v4; // const uuid = require('uuid/v4'); in Udemy video cannot work!!!!!
const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const getCoordsForAddress = require('../util/location');

let DUMMY_PLACES = [
	{
		id: "p1",
		title: "Empire S",
		description: "One ofdsfljksaf",
		location: {
			lat: 40.7484474,
			lng: -73.9871516,
		},
		address: "20 W 34th St, New York",
		creator: "u1",
	},
];

const getPlaceById = (req, res, next) => {
	const placeId = req.params.pid; // {get pid: 'p1' from dynamic segment from the URL}
	const place = DUMMY_PLACES.find((p) => p.id === placeId);
	if (!place) {
		throw new Error("Could not find a place for the provided id.", 404);
		// error.code = 404;
		// throw error; // throw error to the error handling middleware in app.js for sync function
	}
	res.json({ place: place }); // place object saves the place variable, then convert to json, json store in response res and send to the frontend
};

const getPlacesByUserId = (req, res, next) => {
	// order of code is important!
	const userId = req.params.uid;
	const places = DUMMY_PLACES.filter((u) => {
		// // find() return the 1st matched data only
		return u.creator === userId;
	});

	if (!places || places.length === 0) {
		return next(
			new HttpError("Could not find places for the provided user id.", 404)
		); // throw error to the error handling middleware in app.js for async function
	}

	res.json({ places });
};

const createPlace = async (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		// throw new HttpError("Invalid input passed", 422);
    return next(new HttpError("empty input passed", 422)); // use next() for async
	}

	const { title, description, address, creator } = req.body;
	// const title = req.body.title;
	// const description = req.body.description; ...


	let coordinates;
	try{
  	coordinates = await getCoordsForAddress(address);
	} catch(error) {
		return next(error); // pass the error to the next middleware and stop execution of this function
	}

	const createdPlace = {
		id: uuid(),
		title, //   same as title: title as they are the same name
		description,
		location: coordinates, // need to specify since they are in different name
		address,
		creator,
	};

	DUMMY_PLACES.push(createdPlace); // or unshift(createdPlace)

	res.status(201).json({ place: createdPlace }); //place object encoded to json and send to res
};

const updatePlaceById = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log(errors);
		throw new HttpError("Invalid input passed", 422);
	}

	const { title, description } = req.body; // get the title, description from the req.body
	const placeId = req.params.pid; // get the pid from the url

	const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) }; // copy the place matched to p.id to a new object to prevent direct manipulation of the original data
	const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
	updatedPlace.title = title; // array/object const stores the address  but not the array/object itself. Therefore, we can change the value of the const array/object
	updatedPlace.description = description;

	DUMMY_PLACES[placeIndex] = updatedPlace;
	res.status(200).json({ place: updatedPlace }); // 200 but not 201 as we just update, not creating sth new
};

const deletePlace = (req, res, next) => {
	const placeId = req.params.pid;

  if(DUMMY_PLACES.find(p => p.id ===placeId)){
    throw new HttpError('Could not find a place for that id', 404);
  }
	DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId); // filter() would keep the data with p.id that is not equal to placeId
	res.status(200).json({ message: "Deleted place." });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlace = deletePlace;
