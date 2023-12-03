const produtoModel = require("../models/produtoModel");

module.exports = {
  getProduto: async function (req, res, next) {
    let produto = await produtoModel.getById(req.params.id_produto);
    if (produto) res.status(200).json({ produto });
    else
      res.status(500).json({ message: "Não foi possível localizar o produto" });
  },

  postProduto: async function (req, res, next) {
    const { nome, descricao, qtd_estoque, preco } = req.body;

    //TO DO VALIDAR CAMPOSSS

    produtoModel
      .save(nome, descricao, qtd_estoque, preco)
      .then((produto) => {
        res.status(201).json({ produto });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Não foi possível criar o novo produto" });
      });
  },
  putProduto: async function (req, res, next) {
    const { id_produto } = req.params;
    const { nome, descricao, qtd_estoque, preco } = req.body;
    //TO DO VALIDAR CAMPOSSS
    let aux = {};
    if (nome) aux.nome = nome;
    if (descricao) aux.descricao = descricao;
    if (qtd_estoque) aux.qtd_estoque = qtd_estoque;
    if (preco) aux.preco = preco;

    if (aux == {}) {
      return res
        .status(500)
        .json({ message: "Nenhum atributo foi modificado" });
    }
    //Arrumar resposta
    produtoModel
      .update(id_produto, aux.nome, aux.descricao, aux.qtd_estoque, aux.preco)
      .then(async function (produto) {
        const updated_produto = await produtoModel.getById(id_produto);
        if (produto) res.status(200).json({ updated_produto });
        else res.status(500).json({ message: "Produto não encontrado" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Falha ao alterar o produto " });
      });
  },
  updateEstoque: async function (id_produto, qtd_estoque) {
    produtoModel.updateQtd(id_produto, qtd_estoque);
  },
  deleteProduto: async function (req, res, next) {
    try {
      const id_produto = req.params.id_produto;
      const produto = await produtoModel.getById(id_produto);
      await produtoModel.delete(id_produto);

      if (!produto) {
        return res.status(404).json({ message: "Produto not found" });
      }
      return res.status(200).json({ deleted_produto: produto });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to delete produto" });
    }
  },
};
