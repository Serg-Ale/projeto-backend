const { DataTypes, Model } = require("sequelize");
const Joi = require("joi");
const sequelize = require("../helpers/database");
const VendaModel = require("./VendaModel");
const ProdutosVendaModel = require("./ProdutosVendaModel");

class ProdutoModel extends Model {}

ProdutoModel.init(
  {
    id_produto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validateNome(value) {
          const schema = Joi.string().min(3).max(50).required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error('O campo "nome" deve ter entre 3 e 50 caracteres.');
          }
        },
      },
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        validateDescricao(value) {
          const schema = Joi.string().min(10).max(255).required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error(
              'O campo "descricao" deve ter entre 10 e 255 caracteres.'
            );
          }
        },
      },
    },
    qtd_estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        validateQtdEstoque(value) {
          const schema = Joi.number().integer().min(0).required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error(
              'O campo "qtd_estoque" deve ser um número inteiro maior ou igual a 0.'
            );
          }
        },
      },
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        validatePreco(value) {
          const schema = Joi.number().positive().required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error('O campo "preco" deve ser um número positivo.');
          }
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Produto",
  }
);

ProdutoModel.belongsToMany(VendaModel, {
  through: ProdutosVendaModel,
  foreignKey: "id_produto",
  otherKey: "id_venda",
});

module.exports = ProdutoModel;
