const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: false,
    default: Date.now,
  },
  createUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  status: {
    type: String,
    required: false,
    default: "Em Análise",
  },
});

module.exports = mongoose.model("Suggestion", schema);
