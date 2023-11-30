const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");

const VendaModel = require("./vendaModel");
const ProdutoModel = require("./produtoModel");

const ProdutosVendaModel = sequelize.define("ProdutosVenda", {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor_total_protudo: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

// FuncionarioModel.belongsTo(AdminModel.Model, { foreignKey: "id_admin" });
// AdminModel.Model.hasMany(FuncionarioModel, { foreignKey: "id_admin" });

module.exports = {
  list: async function () {
    return await ProdutosVendaModel.findAll();
  },

  save: async function (quantidade, valor_total_protudo, id_venda, id_produto) {
    if (id_venda instanceof VendaModel.Model) {
      id_venda = VendaModel.id_venda;
    }

    if (id_produto instanceof ProdutoModel.Model) {
      id_produto = ProdutoModel.id_produto;
    }

    const produtosVenda = await ProdutosVendaModel.create({
      id_venda,
      id_produto,
      quantidade,
      valor_total_protudo, // TODO pegar valor da tabela Produtos_venda
    });
    return produtosVenda;
  },

  update: async function (
    id_venda,
    id_produto,
    quantidade,
    valor_total_produto
  ) {
    return await VendaModel.update(
      { id_venda, id_produto, quantidade, valor_total_produto },
      {
        where: { id_venda, id_produto },
      }
    );
  },

  delete: async function (id_venda, id_produto) {
    return await VendaModel.destroy({ where: { id_venda, id_produto } });
  },

  getById: async function (id_venda, id_produto) {
    return await VendaModel.findByPk(id_funcionario, id_produto);
  },

  Model: VendaModel,
};
