const mongoose = require("mongoose");
const User = mongoose.model("User");
const repository = require("../repositories/user-repository.js");
const md5 = require("md5");
const authService = require("../services/auth-service.js");
const ValidationContract = require("../validators/fluent-validator");

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(
    req.body.firstName,
    3,
    "O Nome deve conter pelo menos 3 caracteres"
  );
  contract.hasMinLen(
    req.body.lastName,
    3,
    "O Sobrenome deve conter pelo menos 3 caracteres"
  );
  contract.isEmail(req.body.email, "E-mail inválido");
  contract.hasMinLen(
    req.body.password,
    8,
    "A senha deve conter pelo menos 8 caracteres"
  );

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  try {
    // Recupera o Token
    /*var token = req.body.token || req.body.token || req.headers['x-acess-token'];

      // Decodifica o Token
      var data = await authService.decodeToken(token);*/

    await repository.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      roles: req.body.roles,
      password: md5(req.body.password + global.SALT_KEY),
      registration: req.body.registration,
    });
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
      message: "Usuário removido com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
      error: e,
    });
  }
};

exports.authenticate = async (req, res, next) => {
  try {
    const user = await repository.authenticate({
      email: req.body.email,
      password: md5(req.body.password + global.SALT_KEY),
    });

    if (!user) {
      res.status(404).send({ message: "Usuário ou senha inválidos" });
      return;
    }

    const token = await authService.generateToken({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      roles: user.roles,
    });

    res.status(201).send({
      token: token,
      data: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        roles: user.roles,
      },
    });
  } catch (e) {
    res.status(500).send({ message: "Falha ao processar sua requisição" });
  }
};
