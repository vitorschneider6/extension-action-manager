const mongoose = require("mongoose");
const user = require("../models/user");
const User = mongoose.model("User");

exports.create = async (data) => {
  let user = new User(data);
  await user.save();
};

exports.get = async () => {
  const res = await User.find({});
  return res;
};

exports.put = async (id, body) => {
  await User.findByIdAndUpdate(id, {
    $set: {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      active: body.active,
      email: body.email,
    },
  });
};

exports.getById = async (id) => {
  const res = await User.findOne({
    _id: id,
  });
  return res;
};

exports.delete = async (id) => {
  await User.findOneAndRemove(id);
};

exports.authenticate = async (data) => {
  const res = await User.findOne({
    email: data.email,
    password: data.password,
  });
  return res;
};
