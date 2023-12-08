const ProdutoModel = require("../models/ProdutoModel");
const GenericService = require("../helpers/GenericService");

const ProdutoService = new GenericService(ProdutoModel, "id_produto");

module.exports = ProdutoService;
