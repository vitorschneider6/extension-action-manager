const mongoose = require("mongoose");
const ExtensionAction = mongoose.model("ExtensionAction");
const repository = require("../repositories/extension_action-repository");
const ValidationContract = require("../validators/fluent-validator");

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(
    req.body.title,
    5,
    "O título deve conter pelo menos 5 caracteres"
  );
  contract.isRequired(req.body.description, "Obrigatório informar descrição");
  contract.isRequired(req.body.hour, "Necessário informar horário");
  contract.isRequired(req.body.place, "Necessário informar local");

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }
  try {
    let data = req.body;
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

exports.getByUser = async (req, res, next) => {
  try {
    let data = await repository.getByUser(req.params.id);
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
      message: "Ação de Extensão removida com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: e,
    });
  }
};
