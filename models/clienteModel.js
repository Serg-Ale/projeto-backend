const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");
const AdminModel = require("./adminModel");

const ClienteModel = sequelize.define("Cliente", {
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
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

ClienteModel.belongsTo(AdminModel.Model, { foreignKey: "id_admin" });
AdminModel.Model.hasMany(ClienteModel, { foreignKey: "id_admin" });

module.exports = {
  list: async function () {
    return await ClienteModel.findAll();
  },

  save: async function (usuario, email, senha, telefone, id_admin) {
    if (id_admin instanceof AdminModel.Model) {
      id_admin = AdminModel.id_admin;
    }

    const cliente = await ClienteModel.create({
      usuario,
      email,
      senha,
      telefone,
      id_admin,
    });
    return cliente;
  },

  update: async function (id, usuario, email, senha, telefone, id_admin) {
    return await ClienteModel.update(
      { usuario, email, senha, telefone, id_admin },
      {
        where: { id },
      }
    );
  },

  delete: async function (id) {
    return await ClienteModel.destroy({ where: { id } });
  },

  getById: async function (id) {
    return await ClienteModel.findByPk(id);
  },

  Model: ClienteModel,
};
