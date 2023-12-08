const ProdutosVendaModel = require("../models/ProdutosVendaModel");
const GenericService = require("../helpers/GenericService");
const ProdutosVendaService = new GenericService(ProdutosVendaModel);

module.exports = ProdutosVendaService;
