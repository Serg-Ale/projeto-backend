const { DataTypes, Model } = require("sequelize");
const Joi = require("joi");
const sequelize = require("../helpers/database");

class ProdutosVendaModel extends Model {}

ProdutosVendaModel.init(
  {
    id_produtos_venda: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        validateQuantidade(value) {
          const schema = Joi.number().integer().min(1).required(); 
          const { error } = schema.validate(value); 
          if (error) {
            throw new Error(
              'O campo "quantidade" deve ser um número inteiro maior ou igual a 1.'
            );
          }
        },
      },
    },
    valor_total_produto: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        validateValorTotalProduto(value) {
          const schema = Joi.number().positive().required(); 
          const { error } = schema.validate(value);
          if (error) {
            throw new Error(
              'O campo "valor_total_produto" deve ser um número positivo.'
            );
          }
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "ProdutosVenda",
  }
);

module.exports = ProdutosVendaModel;
