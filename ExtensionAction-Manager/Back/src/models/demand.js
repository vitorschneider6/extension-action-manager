const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    enum: ["pendente", "aprovado", "negado"],
    default: "pendente",
  },
  action: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "extension_action",
    required: true,
  },
});

module.exports = mongoose.model("Demand", schema);
