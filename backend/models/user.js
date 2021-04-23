const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: { type: Number, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  review: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Review' }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);