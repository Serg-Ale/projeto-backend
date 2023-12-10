const { DataTypes, Model } = require("sequelize");
const sequelize = require("../helpers/database");
const ProdutoModel = require("./ProdutoModel");
const ProdutosVendaModel = require("./ProdutosVendaModel");
const ClienteModel = require("./ClienteModel");
const FuncionarioModel = require("./FuncionarioModel");

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
    timestamps: false,
    modelName: "Venda",
  }
);

VendaModel.belongsTo(ClienteModel, { foreignKey: "id_cliente" });
VendaModel.belongsTo(FuncionarioModel, { foreignKey: "id_funcionario" });

ClienteModel.hasMany(VendaModel, { foreignKey: "id_cliente" });
FuncionarioModel.hasMany(VendaModel, { foreignKey: "id_funcionario" });

module.exports = VendaModel;
