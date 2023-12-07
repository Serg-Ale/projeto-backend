const ProdutoModel = require("../models/ProdutoModel");
const VendaModel = require("../models/VendaModel");
const ProdutosVendaModel = require("../models/ProdutosVendaModel");

ProdutoModel.belongsToMany(VendaModel, {
  through: ProdutosVendaModel,
  foreignKey: "id_produto",
});

VendaModel.belongsToMany(ProdutoModel, {
  through: ProdutosVendaModel,
  foreignKey: "id_venda",
});

// Certifique-se de exportar os modelos para uso em outras partes do código
module.exports = {
  ProdutoModel,
  VendaModel,
  ProdutosVendaModel,
};
