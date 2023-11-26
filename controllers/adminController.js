const adminModel = require("../models/adminModel");

module.exports = {
  getAdmins: async function (req, res, next) {
    const pagina = Number.parseInt(req.query.pagina);
    const quantidade = Number.parseInt(req.query.quantidade);

    let paginaAtual = 0; // valor default
    if (!Number.isNaN(pagina) && pagina > 0) {
      paginaAtual = pagina;
    }

    let quantidadePorPagina = 10; // valor default
    if (!Number.isNaN(quantidade) && quantidade >= 1 && quantidade <= 10) {
      quantidadePorPagina = quantidade;
    }

    const { count, rows: admins } = await adminModel.Model.findAndCountAll({
      limit: quantidadePorPagina,
      offset: paginaAtual * quantidadePorPagina,
    });

    const totalPaginas = Math.ceil(count / quantidadePorPagina);

    res.send({
      admins,
      totalPaginas,
    });
  },

  getAdmin: async function (req, res, next) {
    let admin = await adminModel.getById(req.params.id);
    if (admin) res.status(200).json({ admin });
    else
      res.status(500).json({ message: "Não foi possível localizar o admin" });
  },
  postAdmin: async function (req, res, next) {
    const { usuario, email, senha } = req.body;
    //TO DO VALIDAR CAMPOSSS
    adminModel
      .save(usuario, email, senha)
      .then((admin) => {
        res.status(201).json({ admin });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Não foi possível criar o novo admin" });
      });
  },
  putAdmin: async function (req, res, next) {
    const { id } = req.params;
    const { usuario, email, senha } = req.body;
    //TO DO VALIDAR CAMPOSSS
    let aux = {};
    if (usuario) aux.usuario = usuario;
    if (email) aux.email = email;
    if (senha) aux.senha = senha;

    if (aux == {}) {
      return res
        .status(500)
        .json({ message: "Nenhum atributo foi modificado" });
    }
    //Arrumar resposta
    adminModel
      .update(id, aux.usuario, aux.email, aux.senha)
      .then((admin) => {
        if (admin) res.status(200).json({ admin });
        else res.status(500).json({ message: "Admin não encontrado" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Falha ao alterar o admin" });
      });
  },
  deleteAdmin: async function (req, res, next) {
    //Arrumar resposta
    adminModel
      .delete(req.params.id)
      .then((admin) => {
        if (admin) res.status(200).json({ admin });
        else res.status(500).json(fail("Admin não encontrado"));
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Falha ao excluir o admin" });
      });
  },
};
