const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");

const AdminModel = sequelize.define("Admin", {
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
});

module.exports = {
  list: async function () {
    return await AdminModel.findAll();
  },

  save: async function (usuario, email, senha) {
    return await AdminModel.create({ usuario, email, senha });
  },

  update: async function (id_admin, usuario, email, senha) {
    return await AdminModel.update(
      { usuario, email, senha },
      {
        where: { id_admin },
      }
    );
  },

  delete: async function (id_admin) {
    return await AdminModel.destroy({ where: { id_admin } });
  },

  getById: async function (id_admin) {
    return await AdminModel.findByPk(id_admin);
  },

  Model: AdminModel,
};
