const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  course_coordinator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourseCoordinator",
  },
  active: {
    type: Boolean,
    required: false,
    default: true,
  },
});

module.exports = mongoose.model("Course", schema);
