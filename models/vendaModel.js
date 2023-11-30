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

// FuncionarioModel.belongsTo(AdminModel.Model, { foreignKey: "id_admin" });
// AdminModel.Model.hasMany(FuncionarioModel, { foreignKey: "id_admin" });

module.exports = {
  list: async function () {
    return await VendaModel.findAll();
  },

  save: async function (valor_venda, id_funcionario, id_cliente) {
    if (id_funcionario instanceof funcionarioModel.Model) {
      id_funcionario = funcionarioModel.id_funcionario;
    }

    if (id_cliente instanceof ClienteModel.Model) {
      id_cliente = ClienteModel.id_cliente;
    }

    const venda = await VendaModel.create({
      id_funcionario,
      id_cliente,
      valor_venda, // TODO pegar valor da tabela Produtos_venda
    });
    return venda;
  },

  update: async function (id_venda, id_funcionario, id_cliente, valor_venda) {
    return await VendaModel.update(
      { id_funcionario, id_cliente, valor_venda },
      {
        where: { id_venda },
      }
    );
  },

  delete: async function (id_venda) {
    return await VendaModel.destroy({ where: { id_venda } });
  },

  getById: async function (id_venda) {
    return await VendaModel.findByPk(id_funcionario);
  },

  Model: VendaModel,
};
