const VendaModel = require("../models/VendaModel");
const GenericService = require("../helpers/GenericService");

const VendaService = new GenericService(VendaModel, "id_venda");

module.exports = VendaService;
