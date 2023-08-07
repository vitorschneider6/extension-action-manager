const mongoose = require("mongoose");
const Course = mongoose.model("Course");
const repository = require("../repositories/course-repository");
const ValidationContract = require("../validators/fluent-validator")

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(req.body.title, 5, 'O título deve conter pelo menos 5 caracteres');
  contract.isRequired(req.body.description, 3, 'Obrigatório informar descrição');

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

console.log(req.body);
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

exports.getAll = async (req, res, next) => {
  try {
    let data = await repository.getAll();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.getBySlug = async (req, res, next) => {
  try {
    let data = await repository.getBySlug(req.params.slug);
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
      message: "Curso removido com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: e,
    });
  }
};
