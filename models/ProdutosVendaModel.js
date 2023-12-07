const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");


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

module.exports = ProdutosVendaModel

