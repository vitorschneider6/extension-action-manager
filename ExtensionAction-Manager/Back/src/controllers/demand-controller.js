const mongoose = require("mongoose");
const Demand = mongoose.model("Demand");
const repository = require("../repositories/demand-repository");
const ValidationContract = require("../validators/fluent-validator");

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.isRequired(req.body.description, "A descrição é obrigatória");
  contract.isRequired(req.body.city, "Necessário informar a cidade");

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  try {
    let data = req.body;
    await repository.create(data);
    res.status(201).send({
      message: "Cadastrado com sucesso",
      data: req.body,
    });
  } catch (e) {
    res.status(400).send({ message: "Falha ao processar sua requisição" });
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
      message: "Demanda removido com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: e,
    });
  }
};
