const { DataTypes, Model } = require("sequelize");
const sequelize = require("../helpers/database");
const AdminModel = require("./AdminModel");

class ClienteModel extends Model {}

ClienteModel.init(
  {
    id_cliente: {
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
    telefone: {
      type: DataTypes.STRING,
      timestamps: false,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false, modelName: "Cliente" }
);

ClienteModel.belongsTo(AdminModel, { foreignKey: "id_admin" });
AdminModel.hasMany(ClienteModel, { foreignKey: "id_admin" });

module.exports = ClienteModel;
