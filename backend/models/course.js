const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
	courseCode: { type: String, required: true },
	name: { type: String, required: true },
	description: { type: String, required: true },
	instructor: { type: String , required: true},
	time: { type: String, required: true },
	startDate: {type: String, required: true},
	endDate: {type: String, required: true},
	recurrenceRule: {type: String, required: true},
	averageGrade: { type: String },
	averageWorkload: { type: Number },
	review: [{ type: mongoose.Types.ObjectId, ref: "Review" }]
});

module.exports = mongoose.model("Course", courseSchema);
