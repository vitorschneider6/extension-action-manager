const mongoose = require("mongoose");
const ExtensionAction = mongoose.model("ExtensionAction");

exports.create = async (data) => {
  let extensionAction = new ExtensionAction(data);
  await extensionAction.save();
};

exports.get = async () => {
  const res = await ExtensionAction.find({ status: "aceita" });
  return res;
};

exports.getAll = async () => {
  const res = await ExtensionAction.find();
  return res;
};

exports.put = async (id, body) => {
  await ExtensionAction.findByIdAndUpdate(id, {
    $set: {
      startDate: body.startDate,
      title: body.title,
      description: body.description,
      status: body.status,
      tags: body.tags,
    },
  });
};

exports.getByUser = async (id) => {
  const res = await ExtensionAction.find({
    student: id,
  });
  return res;
};

exports.getById = async (id) => {
  const res = await ExtensionAction.findOne({
    _id: id,
  });
  return res;
};

exports.delete = async (id) => {
  await ExtensionAction.findOneAndRemove(id);
};
