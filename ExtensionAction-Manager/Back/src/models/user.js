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
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  active: {
    type: Boolean,
    // required: true,
    default: true,
  },
  skills: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  roles: {
    type: String,
    required: true,
    enum: ["estudante", "servidor", "comunidade", "admin"],
    default: "estudante",
  },
  registration: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", schema);
