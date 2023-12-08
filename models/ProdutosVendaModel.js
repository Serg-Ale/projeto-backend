const { DataTypes, Model } = require("sequelize");
const sequelize = require("../helpers/database");

class ProdutosVendaModel extends Model {}

ProdutosVendaModel.init(
  {
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
  },
  {
    sequelize,
    modelName: "ProdutosVenda",
  }
);

module.exports = ProdutosVendaModel;
