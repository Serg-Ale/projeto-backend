const { DataTypes, Model } = require("sequelize");
const sequelize = require("../helpers/database");

class VendaModel extends Model {}

VendaModel.init(
  {
    id_venda: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    valor_venda: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Venda",
  }
);
module.exports = VendaModel
