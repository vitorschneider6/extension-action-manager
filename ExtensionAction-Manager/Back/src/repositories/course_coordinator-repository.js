const mongoose = require("mongoose");
const CourseCoordinator = mongoose.model("CourseCoordinator");

exports.create = async (data) => {
  let course_coordinator = new CourseCoordinator(data);
  await course_coordinator.save();
};

exports.get = async () => {
  const res = await CourseCoordinator.find({});
  return res;
};

exports.put = async (id, body) => {
  await CourseCoordinator.findByIdAndUpdate(id, {
    $set: {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      active: body.active,
    },
  });
};

exports.getById = async (id) => {
  const res = await CourseCoordinator.findOne({
    id: id,
  });
  return res;
};

exports.delete = async (id) => {
  await CourseCoordinator.findOneAndRemove(id);
};
