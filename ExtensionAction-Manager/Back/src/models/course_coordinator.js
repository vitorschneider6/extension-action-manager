const mongoose = require("mongoose");
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
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  active: {
    type: Boolean,
    required: false,
    default: true,
  },
});

module.exports = mongoose.model("CourseCoordinator", schema);
