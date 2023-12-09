const ClienteModel = require("../models/ClienteModel");
const GenericService = require("../helpers/GenericService");

const ClienteService = new GenericService(ClienteModel, "id_cliente");

module.exports = ClienteService;
