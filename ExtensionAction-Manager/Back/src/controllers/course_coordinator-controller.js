const mongoose = require("mongoose");
const CourseCoordinator = mongoose.model("CourseCoordinator");
const repository = require("../repositories/course_coordinator-repository");
const ValidationContract = require("../validators/fluent-validator");

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(req.body.firstName, 3, 'O Nome deve conter pelo menos 3 caracteres');
  contract.hasMinLen(req.body.lastName, 3, 'O Sobrenome deve conter pelo menos 3 caracteres');
  contract.isEmail(req.body.email, 'E-mail inválido');
  contract.isCPF(req.body.cpf, 'CPF inválido');
  contract.hasMinLen(req.body.password, 8, 'Senha deve conter pelo menos 8 caracteres')

  // Se os dados forem inválidos
  if (!contract.isValid()) {
      res.status(400).send(contract.errors()).end();
      return;
  }
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
      message: "Removido com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: e,
    });
  }
};
