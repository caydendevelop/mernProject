const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  grade: { type: Number, required: true },
  workload: { type: Number, required: true },
  comment: { type: String, required: true },
  courseCode: { type: String, required: true, ref: 'Course' },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Review', reviewSchema);