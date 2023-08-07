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
  hour: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: false,
    default: Date.now,
  },
  startDate: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    required: false,
    enum: [
      "em avaliação",
      "reformular",
      "aceita",
      "em andamento",
      "finalizado",
      "negado",
    ],
    default: "em avaliação",
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  /* tags: [
    {
      type: String,
      required: false,
      trim: true,
    },
  ],
  */
  active: {
    type: Boolean,
    required: false,
    default: true,
  },
});

module.exports = mongoose.model("ExtensionAction", schema);
