const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");
const AdminModel = require("../models/adminModel");

const FuncionarioModel = sequelize.define("Funcionario", {
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
    allowNull: false,
  },
});

FuncionarioModel.belongsTo(AdminModel.Model, { foreignKey: "id_admin" });
AdminModel.Model.hasMany(FuncionarioModel, { foreignKey: "id_admin" });

module.exports = {
  list: async function () {
    return await FuncionarioModel.findAll();
  },

  save: async function (usuario, email, senha, cargo, salario, id_admin) {
    if (id_admin instanceof AdminModel.Model) {
      id_admin = AdminModel.id_admin;
    }

    const funcionario = await FuncionarioModel.create({
      usuario,
      email,
      senha,
      cargo,
      salario,
      id_admin,
    });
    return funcionario;
  },

  update: async function (
    id_funcionario,
    usuario,
    email,
    senha,
    cargo,
    salario,
    id_admin
  ) {
    return await FuncionarioModel.update(
      { usuario, email, senha, cargo, salario, id_admin },
      {
        where: { id_funcionario },
      }
    );
  },

  delete: async function (id_funcionario) {
    return await FuncionarioModel.destroy({ where: { id_funcionario } });
  },

  getById: async function (id_funcionario) {
    return await FuncionarioModel.findByPk(id_funcionario);
  },

  Model: FuncionarioModel,
};
