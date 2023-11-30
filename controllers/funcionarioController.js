const funcionarioModel = require("../models/funcionarioModel");

module.exports = {
  getFuncionarios: async function (req, res, next) {
    let funcionarios = await funcionarioModel.list();
    res.status(200).json({ funcionarios });
  },

  getFuncionario: async function (req, res, next) {
    let funcionario = await funcionarioModel.getById(req.params.id);
    if (funcionario) res.status(200).json({ funcionario });
    else
      res
        .status(500)
        .json({ message: "Não foi possível localizar o funcionario" });
  },
  postFuncionario: async function (req, res, next) {
    const { usuario, email, senha, cargo, salario, id_admin } = req.body;

    //TO DO VALIDAR CAMPOSSS

    funcionarioModel
      .save(usuario, email, senha, cargo, salario, id_admin)
      .then((funcionario) => {
        res.status(201).json({ funcionario });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Não foi possível criar o novo funcionario" });
      });
  },
  putFuncionario: async function (req, res, next) {
    const { id } = req.params;
    const { usuario, email, senha, cargo, salario, id_admin } = req.body;
    //TO DO VALIDAR CAMPOSSS
    let aux = {};
    if (usuario) aux.usuario = usuario;
    if (email) aux.email = email;
    if (senha) aux.senha = senha;
    if (cargo) aux.cargo = cargo;
    if (salario) aux.salario = salario;
    if (id_admin) aux.id_admin = id_admin;

    if (aux == {}) {
      return res
        .status(500)
        .json({ message: "Nenhum atributo foi modificado" });
    }
    //Arrumar resposta
    funcionarioModel
      .update(
        id,
        aux.usuario,
        aux.email,
        aux.senha,
        aux.cargo,
        aux.salario,
        aux.id_admin
      )
      .then(async function (funcionario) {
        const updated_funcionario = await funcionarioModel.getById(id);
        if (funcionario) res.status(200).json({ updated_funcionario });
        else res.status(500).json({ message: "Funcionario não encontrado" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Falha ao alterar o funcionario " });
      });
  },
  deleteFuncionario: async function (req, res, next) {
    try {
      const id = req.params.id;
      const funcionario = await funcionarioModel.getById(id);
      await funcionarioModel.delete(id);

      if (!funcionario) {
        return res.status(404).json({ message: "Funcionario not found" });
      }
      return res.status(200).json({ deleted_funcionario: funcionario });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to delete funcionario" });
    }
  },
};