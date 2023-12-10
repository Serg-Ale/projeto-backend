const { DataTypes, Model } = require("sequelize");
const Joi = require("joi");

const sequelize = require("../helpers/database");

class AdminModel extends Model {}

AdminModel.init(
  {
    id_admin: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validateUsuario(value) {
          const schema = Joi.string().min(8).max(50).required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error(
              'O campo "usuario" deve ter entre 8 e 50 caracteres.'
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
      timestamps: false,
      allowNull: false,
      validate: {
        validateSenha(value) {
          const schema = Joi.string().min(8).required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error('O campo "senha" deve ter no mínimo 8 caracteres.');
          }
        },
      },
    },
  },
  { sequelize, timestamps: false, modelName: "Admin" }
);

module.exports = AdminModel;
