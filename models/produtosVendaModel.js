const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");

const vendaModel = require("./vendaModel");
const produtoModel = require("./produtoModel");

const ProdutosVendaModel = sequelize.define("ProdutosVenda", {
  id_produtos_venda: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_total_produto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

ProdutosVendaModel.belongsTo(vendaModel.Model, { foreignKey: "id_venda" });
vendaModel.Model.hasMany(ProdutosVendaModel, { foreignKey: "id_venda" });

ProdutosVendaModel.belongsTo(produtoModel.Model, { foreignKey: "id_produto" });
produtoModel.Model.hasMany(ProdutosVendaModel, { foreignKey: "id_produto" });

module.exports = {
  list: async function () {
    return await ProdutosVendaModel.findAll();
  },

  save: async function (quantidade, valor_total_produto, id_venda, id_produto) {
    if (id_venda instanceof vendaModel.Model) {
      id_venda = vendaModel.id_venda;
    }

    if (id_produto instanceof produtoModel.Model) {
      id_produto = produtoModel.id_produto;
    }

    const produtosVenda = await ProdutosVendaModel.create({
      quantidade,
      valor_total_produto, // TODO pegar valor da tabela Produtos_venda
      id_venda,
      id_produto,
    });
    return produtosVenda;
  },

  update: async function (
    id_produtos_venda,
    quantidade,
    valor_total_produto,
    id_venda,
    id_produto
  ) {
    return await ProdutosVendaModel.update(
      { quantidade, valor_total_produto, id_venda, id_produto },
      {
        where: { id_produtos_venda },
      }
    );
  },

  delete: async function (id_produtos_venda) {
    return await ProdutosVendaModel.destroy({ where: { id_produtos_venda } });
  },

  getById: async function (id_produtos_venda) {
    return await ProdutosVendaModel.findByPk(id_produtos_venda);
  },

  Model: ProdutosVendaModel,
};
