const { DataTypes, Model } = require("sequelize");
const Joi = require("joi");
const sequelize = require("../helpers/database");
const AdminModel = require("./AdminModel");

class ClienteModel extends Model {}

ClienteModel.init(
  {
    id_cliente: {
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
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validateTelefone(value) {
          const schema = Joi.string()
            .pattern(/^\d{10,11}$/)
            .required();
          const { error } = schema.validate(value);
          if (error) {
            throw new Error(
              'O campo "telefone" deve conter entre 10 e 11 dígitos numéricos.'
            );
          }
        },
      },
    },
  },
  { sequelize, timestamps: false, modelName: "Cliente" }
);

AdminModel.hasMany(ClienteModel, { foreignKey: "id_admin" });
ClienteModel.belongsTo(AdminModel, { foreignKey: "id_admin" });

module.exports = ClienteModel;
