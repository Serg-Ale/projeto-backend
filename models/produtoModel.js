const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");

const ProdutoModel = sequelize.define("Produto", {
  id_produto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  qtd_estoque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = {
  list: async function () {
    return await ProdutoModel.findAll();
  },

  save: async function (nome, descricao, qtd_estoque, preco) {
    const produto = await ProdutoModel.create({
        nome, 
        descricao, 
        qtd_estoque, 
        preco
    });

    return produto;
  },

  update: async function (
    id_produto,
    nome, 
    descricao, 
    qtd_estoque, 
    preco
  ) {
    return await ProdutoModel.update(
      { nome, descricao, qtd_estoque, preco },
      {
        where: { id_produto },
      }
    );
  },

  delete: async function (id_produto) {
    return await ProdutoModel.destroy({ where: { id_produto } });
  },

  getById: async function (id_produto) {
    return await ProdutoModel.findByPk(id_produto);
  },

  Model: ProdutoModel,
};