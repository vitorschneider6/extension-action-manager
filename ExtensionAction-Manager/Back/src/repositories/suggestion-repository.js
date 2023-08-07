const mongoose = require("mongoose");
const Suggestion = mongoose.model("Suggestion");

exports.create = async (data) => {
  let suggestion = new Suggestion(data);
  await suggestion.save();
};

exports.get = async (id) => {
  const res = await Suggestion.find({
    createUser: id,
  });
  return res;
};

exports.getAll = async () => {
  const res = await Suggestion.find({});
  return res;
};

exports.put = async (id, body) => {
  await Suggestion.findByIdAndUpdate(id, {
    $set: {
      title: body.title,
      description: body.description,
      observation: body.observation,
      status: body.status,
    },
  });
};

exports.getByUser = async (id) => {
  const res = await Suggestion({
    createUser: id,
  });
  return res;
};

exports.delete = async (id) => {
  await Suggestion.findOneAndRemove(id);
};
