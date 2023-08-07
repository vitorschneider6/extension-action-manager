/*const mongoose = require("mongoose");
const Student = mongoose.model("Student");

exports.create = async (data) => {
  let student = new Student(data);
  await student.save();
};

exports.get = async () => {
  const res = await Student.find({}).populate("course", "title");
  return res;
};

exports.put = async (id, body) => {
  await Student.findByIdAndUpdate(id, {
    $set: {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      active: body.active,
    },
  });
};

exports.getById = async (id) => {
  const res = await Student.findOne({
    id: id,
  });
  return res;
};

exports.delete = async (id) => {
  await Student.findOneAndRemove(id);
};
*/