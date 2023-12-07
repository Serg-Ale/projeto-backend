// const express = require("express");
// const auth = require("../helpers/auth");
// const router = express.Router();

// const {
//   getProduto,
//   postProduto,
//   putProduto,
//   deleteProduto,
// } = require("../controllers/ProdutoController");
// const pagination = require("../helpers/pagination");
// const ProdutoModel = require("../models/ProdutoModel");
// const getPaginado = require("../helpers/getPaginado");

// router.get("/", pagination(ProdutoModel), getPaginado);
// router.get("/:id_produto", getProduto);
// router.post("/", auth, postProduto);
// router.put("/:id_produto", auth, putProduto);
// router.delete("/:id_produto", auth, deleteProduto);

// module.exports = router;
const express = require("express");
const router = express.Router();
const ProdutoService = require("../services/ProdutoService");

// Rota para criar um novo produto
router.post("/produtos", async (req, res) => {
  try {
    const { nome, descricao, qtd_estoque, preco } = req.body;
    const novoProduto = await ProdutoService.criarProduto({
      nome,
      descricao,
      qtd_estoque,
      preco,
    });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter todos os produtos
router.get("/produtos", async (req, res) => {
  try {
    const produtos = await ProdutoService.obterTodosProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para obter um produto por ID
router.get("/produtos/:id_produto", async (req, res) => {
  try {
    const { id_produto } = req.params;
    const produto = await ProdutoService.obterProdutoPorId(id_produto);
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um produto por ID
router.put("/produtos/:id_produto", async (req, res) => {
  try {
    const { id_produto } = req.params;
    const { nome, descricao, qtd_estoque, preco } = req.body;
    const novosDados = { nome, descricao, qtd_estoque, preco };
    const produtoAtualizado = await ProdutoService.atualizarProduto(
      id_produto,
      novosDados
    );
    res.status(200).json(produtoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para excluir um produto por ID
router.delete("/produtos/:id_produto", async (req, res) => {
  try {
    const { id_produto } = req.params;
    const mensagem = await ProdutoService.excluirProduto(id_produto);
    res.status(200).json({ message: mensagem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
