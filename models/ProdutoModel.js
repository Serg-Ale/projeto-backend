const { DataTypes, Model } = require("sequelize");
const sequelize = require("../helpers/database");

const VendaModel = require("./VendaModel");
const ProdutosVendaModel = require("./ProdutosVendaModel");

class ProdutoModel extends Model {}

ProdutoModel.init(
  {
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
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Produto",
  }
);

ProdutoModel.belongsToMany(VendaModel, {
  through: ProdutosVendaModel,
  foreignKey: "id_produto",
  otherKey: "id_venda",
});

module.exports = ProdutoModel;
