const { DataTypes, Model } = require("sequelize");
const Joi = require("joi");
const sequelize = require("../helpers/database");
const AdminModel = require("./AdminModel");

class FuncionarioModel extends Model {}

FuncionarioModel.init(
  {
    id_funcionario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validateUsuario(value) {
          const schema = Joi.string().min(3).max(50).required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error(
              'O campo "usuario" deve ter entre 3 e 50 caracteres.'
            );
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        validateEmail(value) {
          const schema = Joi.string().email().required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error('O campo "email" deve ser um e-mail válido.');
          }
        },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validateSenha(value) {
          const schema = Joi.string().min(6).required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error('O campo "senha" deve ter no mínimo 6 caracteres.');
          }
        },
      },
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salario: {
      type: DataTypes.FLOAT,
      timestamps: false,
      allowNull: false,
      validate: {
        validateSalario(value) {
          const schema = Joi.number().positive().required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error('O campo "salario" deve ser um número positivo.');
          }
        },
      },
    },
  },
  { sequelize, timestamps: false, modelName: "Funcionario" }
);

AdminModel.hasMany(FuncionarioModel, { foreignKey: "id_admin" });
FuncionarioModel.belongsTo(AdminModel, { foreignKey: "id_admin" });

module.exports = FuncionarioModel;
