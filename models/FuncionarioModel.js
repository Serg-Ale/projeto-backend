const { DataTypes, Model } = require("sequelize");
const sequelize = require("../helpers/database");
const AdminModel = require("./AdminModel");

class FuncionarioModel extends Model {}

FuncionarioModel.init(
  {
    id_funcionario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salario: {
      type: DataTypes.FLOAT,
      timestamps: false,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false, modelName: "Funcionario" }
);

FuncionarioModel.belongsTo(AdminModel, { foreignKey: "id_admin" });
AdminModel.hasMany(FuncionarioModel, { foreignKey: "id_admin" });

module.exports = FuncionarioModel;
