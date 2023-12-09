const { DataTypes, Model } = require("sequelize");
const sequelize = require("../helpers/database");

class AdminModel extends Model {}

AdminModel.init(
  {
    id_admin: {
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
      timestamps: false,
      allowNull: false,
    },
  },

  { sequelize, timestamps: false, modelName: "Admin" }
);

module.exports = AdminModel;
