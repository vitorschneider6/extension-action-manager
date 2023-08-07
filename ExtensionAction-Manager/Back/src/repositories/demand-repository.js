const mongoose = require("mongoose");
const Demand = mongoose.model("Demand");

exports.create = async (data) => {
  let demand = new Demand(data);
  await demand.save();
};

exports.get = async () => {
  const res = await Demand.find({});
  return res;
};

exports.put = async (id, body) => {
  await Demand.findByIdAndUpdate(id, {
    $set: {
      title: body.title,
      description: body.description,
      status: body.status,
    },
  });
};

exports.getById = async (id) => {
  const res = await ExtensionAction.findOne({
    id: id,
  });
  return res;
};

exports.delete = async (id) => {
  await Demand.findOneAndRemove(id);
};
