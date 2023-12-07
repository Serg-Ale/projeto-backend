const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");
const AdminModel = require("./AdminModel");

const ClienteModel = sequelize.define("Cliente", {
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

  update: async function (id_cliente, usuario, email, senha, telefone, id_admin) {
    return await ClienteModel.update(
      { usuario, email, senha, telefone, id_admin },
      {
        where: { id_cliente },
      }
    );
  },

  delete: async function (id_cliente) {
    return await ClienteModel.destroy({ where: { id_cliente } });
  },

  getById: async function (id_cliente) {
    return await ClienteModel.findByPk(id_cliente);
  },

  Model: ClienteModel,
};
