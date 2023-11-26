const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");

const AdminModel = sequelize.define("Admin", {
  id: {
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
});

module.exports = {
  list: async function () {
    return await AdminModel.findAll();
  },

  save: async function (usuario, email, senha) {
    return await AdminModel.create({ usuario, email, senha });
  },

  update: async function (id, usuario, email, senha) {
    return await AdminModel.update(
      { usuario, email, senha },
      {
        where: { id },
      }
    );
  },

  delete: async function (id) {
    return await AdminModel.destroy({ where: { id } });
  },

  getById: async function (id) {
    return await AdminModel.findByPk(id);
  },

  Model: AdminModel,
};
