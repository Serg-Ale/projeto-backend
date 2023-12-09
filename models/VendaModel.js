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

VendaModel.belongsToMany(ProdutoModel, {
  through: {
    model: ProdutosVendaModel,
  },
  foreignKey: "id_venda",
  otherKey: "id_produto",
  constraints: true,
});

ProdutoModel.belongsToMany(VendaModel, {
  through: {
    model: ProdutosVendaModel,
  },
  foreignKey: "id_produto",
  otherKey: "id_venda",
  constraints: true,
});

VendaModel.hasMany(ProdutosVendaModel, { foreignKey: "id_venda" });
ProdutosVendaModel.belongsTo(VendaModel, { foreignKey: "id_venda" });

ProdutoModel.hasMany(ProdutosVendaModel, { foreignKey: "id_produto" });
ProdutosVendaModel.belongsTo(ProdutoModel, { foreignKey: "id_produto" });

VendaModel.hasMany(ClienteModel, {
  foreignKey: "id_cliente",
  constraints: true,
});
ClienteModel.belongsTo(VendaModel, {
  foreignKey: "id_cliente",
  constraints: true,
});

VendaModel.hasMany(FuncionarioModel, {
  foreignKey: "id_funcionario",
  constraints: true,
});
FuncionarioModel.belongsTo(VendaModel, {
  foreignKey: "id_funcionario",
  constraints: true,
});
module.exports = VendaModel;
