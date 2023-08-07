/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  registration: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  skills: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("Student", schema);
*/