const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");
const ClienteModel = require("../models/clienteModel");
const FuncionarioModel = require("../models/funcionarioModel");

const VendaModel = sequelize.define("Venda", {
  id_venda: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  valor_venda: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

VendaModel.belongsTo(ClienteModel.Model, { foreignKey: "id_cliente" });
ClienteModel.Model.hasMany(VendaModel, { foreignKey: "id_cliente" });

VendaModel.belongsTo(FuncionarioModel.Model, { foreignKey: "id_funcionario" });
FuncionarioModel.Model.hasMany(VendaModel, { foreignKey: "id_funcionario" });

module.exports = {
  list: async function () {
    return await VendaModel.findAll();
  },

  save: async function (valor_venda, id_funcionario, id_cliente) {
    if (id_funcionario instanceof FuncionarioModel.Model) {
      id_funcionario = id_funcionario.id_funcionario;
    }

    if (id_cliente instanceof ClienteModel.Model) {
      id_cliente = id_cliente.id_cliente;
    }

    const venda = await VendaModel.create({
      id_funcionario,
      id_cliente,
      valor_venda,
    });

    return venda;
  },

  update: async function (id_venda, valor_venda, id_funcionario, id_cliente) {
    return await VendaModel.update(
      { valor_venda, id_funcionario, id_cliente },
      {
        where: { id_venda },
      }
    );
  },

  delete: async function (id_venda) {
    return await VendaModel.destroy({ where: { id_venda } });
  },

  getById: async function (id_venda) {
    return await VendaModel.findByPk(id_venda);
  },

  Model: VendaModel,
};
