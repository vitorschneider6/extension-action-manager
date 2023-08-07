/*const mongoose = require("mongoose");
const Student = mongoose.model("Student");
const repository = require("../repositories/student-repository");

exports.post = async (req, res, next) => {
  try {
    await repository.create(req.body);
    res.status(201).send({
      message: "Cadastrado com sucesso",
      data: req.body,
    });
  } catch (e) {
    res.status(500).send({ message: "Falha ao processar sua requisição" });
  }
};

exports.get = async (req, res, next) => {
  try {
    let data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    let data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.put(req.params.id, req.body);
    res.status(201).send({
      message: "Atualizado com sucesso!",
      data: req.body,
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: e,
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.body.id);
    res.status(201).send({
      message: "Estudante removido com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: e,
    });
  }
};
*/