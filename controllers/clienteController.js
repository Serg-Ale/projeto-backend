const clienteModel = require("../models/clienteModel");

module.exports = {
  getCliente: async function (req, res, next) {
    let cliente = await clienteModel.getById(req.params.id_cliente);
    if (cliente) res.status(200).json({ cliente });
    else
      res.status(500).json({ message: "Não foi possível localizar o cliente" });
  },
  postCliente: async function (req, res, next) {
    const { usuario, email, senha, telefone, id_admin } = req.body;

    //TO DO VALIDAR CAMPOSSS

    clienteModel
      .save(usuario, email, senha, telefone, id_admin)
      .then((cliente) => {
        res.status(201).json({ cliente });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Não foi possível criar o novo cliente" });
      });
  },
  putCliente: async function (req, res, next) {
    const { id_cliente } = req.params;
    const { usuario, email, senha, telefone, id_admin } = req.body;
    //TO DO VALIDAR CAMPOSSS
    let aux = {};
    if (usuario) aux.usuario = usuario;
    if (email) aux.email = email;
    if (senha) aux.senha = senha;
    if (telefone) aux.telefone = telefone;
    if (id_admin) aux.id_admin = id_admin;

    if (aux == {}) {
      return res
        .status(500)
        .json({ message: "Nenhum atributo foi modificado" });
    }

    clienteModel
      .update(
        id_cliente,
        aux.usuario,
        aux.email,
        aux.senha,
        aux.telefone,
        id_admin
      )
      .then(async function (cliente) {
        const updated_cliente = await clienteModel.getById(id_cliente);
        if (cliente) res.status(200).json({ updated_cliente });
        else res.status(500).json({ message: "Cliente não encontrado" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Falha ao alterar o cliente" });
      });
  },
  deleteCliente: async function (req, res, next) {
    try {
      const id_cliente = req.params.id_cliente;
      const cliente = await clienteModel.getById(id_cliente);
      await clienteModel.delete(id_cliente);

      if (!cliente) {
        return res.status(404).json({ message: "Cliente not found" });
      }
      return res.status(200).json({ cliente });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to delete cliente" });
    }
  },
};
