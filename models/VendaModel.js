const { DataTypes, Model } = require("sequelize");
const Joi = require("joi");
const sequelize = require("../helpers/database");
const ClienteModel = require("./ClienteModel");
const FuncionarioModel = require("./FuncionarioModel");

class VendaModel extends Model {}

VendaModel.init(
  {
    id_venda: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        validateData(value) {
          const schema = Joi.date().required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error('O campo "data" deve ser uma data válida.');
          }
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Venda",
  }
);

VendaModel.belongsTo(ClienteModel, { foreignKey: "id_cliente" });
VendaModel.belongsTo(FuncionarioModel, { foreignKey: "id_funcionario" });

ClienteModel.hasMany(VendaModel, { foreignKey: "id_cliente" });
FuncionarioModel.hasMany(VendaModel, { foreignKey: "id_funcionario" });

module.exports = VendaModel;
