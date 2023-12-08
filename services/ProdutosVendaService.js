const ProdutosVendaModel = require("../models/ProdutosVendaModel");
const GenericService = require("../helpers/GenericService");

const ProdutosVendaService = new GenericService(
  ProdutosVendaModel,
  "id_produtos_venda"
);

module.exports = ProdutosVendaService;
