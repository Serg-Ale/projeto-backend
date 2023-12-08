const express = require("express");
const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");

router.post("/", ProdutoController.criarItem);
router.get("/", ProdutoController.obterTodosItens);
router.get("/:id_produto", ProdutoController.obterItemPorId);
router.put("/:id_produto", ProdutoController.atualizarItem);
router.delete("/:id_produto", ProdutoController.excluirItem);

module.exports = router;
