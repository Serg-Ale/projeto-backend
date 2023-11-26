const { DataTypes } = require("sequelize")
const sequelize = require("../helpers/database")

const AdminModel = sequelize.define('Admin',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
)

module.exports = {
  list: async function () {
    return await AdminModel.findAll()
  },

  save: async function (nome, sobrenome) {
    return await AdminModel.create({ nome, sobrenome })
  },

  update: async function (id, nome, sobrenome) {
    return await AdminModel.update({ nome, sobrenome }, {
      where: { id }
    })
  },

  delete: async function (id) {
    return await AdminModel.destroy({ where: { id } })
  },

  getById: async function (id) {
    return await AdminModel.findByPk(id)
  },
  
  Model: AdminModel
}