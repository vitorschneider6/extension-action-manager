const mongoose = require("mongoose");
const Course = mongoose.model("Course");

exports.create = async (data) => {
  let course = new Course(data);
  await course.save();
};

exports.get = async () => {
  const res = await Course.find({ active: true }).populate(
    "course_coordinator",
    "firstName lastName"
  );
  return res;
};

exports.getAll = async () => {
  const res = await Course.find({});
  return res;
};

exports.put = async (id, body) => {
  await Course.findByIdAndUpdate(id, {
    $set: {
      title: body.title,
      password: body.description,
      slug: body.slug,
      active: body.active,
      course_coordinator: body.course_coordinator,
    },
  });
};

exports.getBySlug = async (slug) => {
  const res = await Course.findOne({
    slug: slug,
  });
  return res;
};

exports.delete = async (id) => {
  await Course.findOneAndRemove(id);
};
