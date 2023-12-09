const FuncionarioModel = require("../models/FuncionarioModel");
const GenericService = require("../helpers/GenericService");

const FuncionarioService = new GenericService(
  FuncionarioModel,
  "id_funcionario"
);

module.exports = FuncionarioService;
