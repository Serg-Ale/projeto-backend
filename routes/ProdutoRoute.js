const express = require("express");
const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");

// Rota para criar um novo produto
router.post("/", ProdutoController.criarItem);

// Rota para obter todos os produtos
router.get("/", ProdutoController.obterTodosItens);

// Rota para obter um produto por ID
router.get("/:id_produto", ProdutoController.obterItemPorId);

// Rota para atualizar um produto por ID
router.put("/:id_produto", ProdutoController.atualizarItem);

// Rota para excluir um produto por ID
router.delete("/:id_produto", ProdutoController.excluirItem);

module.exports = router;
