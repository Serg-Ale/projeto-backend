const ProdutoModel = require("../models/ProdutoModel");
const GenericService = require("../helpers/GenericService");
const ProdutoService = new GenericService(ProdutoModel);

module.exports = ProdutoService;
