/*const mongoose = require("mongoose");
const Servant = mongoose.model("Servant");

exports.create = async (data) => {
  let servant = new Servant(data);
  await servant.save();
};

exports.get = async () => {
  const res = await Servant.find({});
  return res;
};

exports.put = async (id, body) => {
  await Servant.findByIdAndUpdate(id, {
    $set: {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      active: body.active,
    },
  });
};

exports.getById = async (id) => {
  const res = await Servant.findOne({
    id: id,
  });
  return res;
};

exports.delete = async (id) => {
  await Servant.findOneAndRemove(id);
};
*/